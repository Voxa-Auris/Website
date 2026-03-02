import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "voxa_focus";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  date: string; // YYYY-MM-DD
}

export interface FocusHistory {
  date: string;
  tasksCompleted: number;
}

export interface FocusState {
  tasks: Task[];
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  totalPoints: number;
  level: string;
  history: FocusHistory[];
}

const POINTS = {
  TASK_COMPLETE: 50,
  ALL_TASKS_BONUS: 100,
  STREAK_DAY: 25,
  STREAK_7_BONUS: 200,
};

function getLevel(points: number): string {
  if (points >= 1000) return "Unstoppable 💎";
  if (points >= 500) return "On fire 🔥";
  if (points >= 200) return "Aan het groeien 📈";
  return "Beginner 🌱";
}

function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

function getDefaultState(): FocusState {
  return {
    tasks: [],
    streak: 0,
    lastActiveDate: "",
    totalPoints: 0,
    level: "Beginner 🌱",
    history: [],
  };
}

function loadState(): FocusState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw) as FocusState;
    return parsed;
  } catch {
    return getDefaultState();
  }
}

function saveState(state: FocusState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/** Check if streak should be reset or continued based on lastActiveDate */
function reconcileStreak(state: FocusState): FocusState {
  const today = getTodayString();
  if (!state.lastActiveDate) return state;

  const last = new Date(state.lastActiveDate);
  const now = new Date(today);
  const diffDays = Math.round(
    (now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)
  );

  // More than 1 day gap = streak reset (but keep points)
  if (diffDays > 1) {
    return { ...state, streak: 0 };
  }
  return state;
}

/** Reset tasks for a new day, keeping streak/points */
function resetTasksForNewDay(state: FocusState): FocusState {
  const today = getTodayString();
  const todayTasks = state.tasks.filter((t) => t.date === today);
  if (todayTasks.length > 0) return state; // already has today's tasks

  // Archive yesterday's tasks into history
  if (state.tasks.length > 0) {
    const byDate = state.tasks.reduce<Record<string, number>>((acc, t) => {
      if (!acc[t.date]) acc[t.date] = 0;
      if (t.completed) acc[t.date]++;
      return acc;
    }, {});
    const newHistory = [...state.history];
    for (const [date, count] of Object.entries(byDate)) {
      if (!newHistory.find((h) => h.date === date)) {
        newHistory.push({ date, tasksCompleted: count });
      }
    }
    return { ...state, tasks: [], history: newHistory };
  }
  return state;
}

export function useFocusStore() {
  const [state, setState] = useState<FocusState>(() => {
    const loaded = loadState();
    const reconciled = reconcileStreak(loaded);
    const reset = resetTasksForNewDay(reconciled);
    return reset;
  });

  // Persist state on every change
  useEffect(() => {
    saveState(state);
  }, [state]);

  const today = getTodayString();
  const todayTasks = state.tasks.filter((t) => t.date === today);
  const completedTodayCount = todayTasks.filter((t) => t.completed).length;

  const addTask = useCallback(
    (text: string) => {
      if (todayTasks.length >= 3) return;
      const newTask: Task = {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false,
        date: today,
      };
      setState((prev) => ({ ...prev, tasks: [...prev.tasks, newTask] }));
    },
    [todayTasks.length, today]
  );

  const completeTask = useCallback(
    (id: string): { pointsEarned: number; allDone: boolean; streakBonus: boolean } => {
      let pointsEarned = 0;
      let allDone = false;
      let streakBonus = false;

      setState((prev) => {
        const updatedTasks = prev.tasks.map((t) =>
          t.id === id ? { ...t, completed: true } : t
        );

        const todayUpdated = updatedTasks.filter((t) => t.date === today);
        const completedNow = todayUpdated.filter((t) => t.completed).length;

        pointsEarned += POINTS.TASK_COMPLETE;

        // All tasks done bonus
        if (completedNow === 3 && todayUpdated.length === 3) {
          pointsEarned += POINTS.ALL_TASKS_BONUS;
          allDone = true;
        }

        // Streak logic - first task of the day
        let newStreak = prev.streak;
        let lastActive = prev.lastActiveDate;
        const wasFirstTaskToday =
          prev.tasks.filter((t) => t.date === today && t.completed).length === 0;

        if (wasFirstTaskToday) {
          const last = prev.lastActiveDate ? new Date(prev.lastActiveDate) : null;
          const now = new Date(today);
          const diffDays = last
            ? Math.round((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24))
            : 999;

          if (diffDays === 1) {
            newStreak = prev.streak + 1;
          } else if (diffDays === 0) {
            newStreak = prev.streak; // same day
          } else {
            newStreak = 1; // new streak
          }

          lastActive = today;
          pointsEarned += POINTS.STREAK_DAY;

          // 7-day streak bonus
          if (newStreak === 7) {
            pointsEarned += POINTS.STREAK_7_BONUS;
            streakBonus = true;
          }
        }

        const newPoints = prev.totalPoints + pointsEarned;
        return {
          ...prev,
          tasks: updatedTasks,
          streak: newStreak,
          lastActiveDate: lastActive,
          totalPoints: newPoints,
          level: getLevel(newPoints),
        };
      });

      return { pointsEarned, allDone, streakBonus };
    },
    [today]
  );

  const deleteTask = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((t) => t.id !== id),
    }));
  }, []);

  const getStreakBadge = useCallback((streak: number): string => {
    if (streak >= 30) return "👑";
    if (streak >= 14) return "💎";
    if (streak >= 7) return "🔥🔥";
    if (streak >= 3) return "🔥";
    return "";
  }, []);

  return {
    state,
    todayTasks,
    completedTodayCount,
    addTask,
    completeTask,
    deleteTask,
    getStreakBadge,
    today,
  };
}
