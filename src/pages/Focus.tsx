import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Plus, Check, Trash2, Zap, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useFocusStore } from "@/hooks/useFocusStore";

// Dutch day/month names
const DAYS = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
const MONTHS = [
  "januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december",
];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Goedemorgen, Mick! 👋";
  if (h < 18) return "Goedemiddag, Mick! 💪";
  return "Goedenavond, Mick! 🌙";
}

interface PointsPopup {
  id: string;
  amount: number;
  x: number;
  y: number;
}

export default function Focus() {
  const { state, todayTasks, completedTodayCount, addTask, completeTask, deleteTask, getStreakBadge, today } =
    useFocusStore();

  const [inputValue, setInputValue] = useState("");
  const [pointsPopups, setPointsPopups] = useState<PointsPopup[]>([]);
  const [completingId, setCompletingId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fireConfetti = useCallback(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#11b4eb", "#f4dd8d", "#ffffff", "#a855f7"],
    });
  }, []);

  const handleAddTask = useCallback(() => {
    const text = inputValue.trim();
    if (!text || todayTasks.length >= 3) return;
    addTask(text);
    setInputValue("");
    inputRef.current?.focus();
  }, [inputValue, todayTasks.length, addTask]);

  const handleComplete = useCallback(
    (id: string, e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      setCompletingId(id);

      const result = completeTask(id);

      // Show points popup near the button
      const popup: PointsPopup = {
        id: crypto.randomUUID(),
        amount: result.pointsEarned,
        x: rect.left + rect.width / 2,
        y: rect.top,
      };
      setPointsPopups((prev) => [...prev, popup]);
      setTimeout(() => {
        setPointsPopups((prev) => prev.filter((p) => p.id !== popup.id));
      }, 1500);

      setTimeout(() => setCompletingId(null), 600);

      if (result.allDone) {
        setTimeout(fireConfetti, 300);
      }
    },
    [completeTask, fireConfetti]
  );

  const incompleteTasks = todayTasks.filter((t) => !t.completed);
  const completedTasks = todayTasks.filter((t) => t.completed);
  const currentTask = incompleteTasks[0] ?? null;
  const upcomingTasks = incompleteTasks.slice(1);
  const progressPercent = todayTasks.length > 0 ? (completedTodayCount / 3) * 100 : 0;
  const allDone = completedTodayCount === 3 && todayTasks.length === 3;
  const streakBadge = getStreakBadge(state.streak);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Fixed points popups */}
      <AnimatePresence>
        {pointsPopups.map((popup) => (
          <motion.div
            key={popup.id}
            className="fixed z-[100] pointer-events-none font-bold text-xl text-[#f4dd8d]"
            style={{ left: popup.x, top: popup.y, transform: "translateX(-50%)" }}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -60, scale: 1.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            +{popup.amount} pts
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Stats Bar */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame size={18} className="text-orange-400" />
            <span className="font-semibold text-sm">
              {state.streak} dag{state.streak !== 1 ? "en" : ""} streak
              {streakBadge && <span className="ml-1">{streakBadge}</span>}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-[#f4dd8d] border-[#f4dd8d]/30 bg-[#f4dd8d]/10">
              <Zap size={12} className="mr-1" />
              {state.totalPoints} punten
            </Badge>
            <span className="text-xs text-muted-foreground hidden sm:block">{state.level}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-1">
          <p className="text-muted-foreground text-sm">{formatDate(today)}</p>
          <h1 className="text-2xl font-bold">{getGreeting()}</h1>
        </div>

        {/* All done celebration */}
        <AnimatePresence>
          {allDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-[#f4dd8d]/40 bg-[#f4dd8d]/10 p-6 text-center space-y-2"
            >
              <div className="text-4xl">🏆</div>
              <h2 className="text-xl font-bold text-[#f4dd8d]">Alle taken klaar!</h2>
              <p className="text-muted-foreground text-sm">Je hebt +100 bonus punten verdiend. Geweldig werk!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Current Task Spotlight */}
        <AnimatePresence mode="wait">
          {currentTask && (
            <motion.div
              key={currentTask.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`rounded-2xl border-2 p-6 space-y-4 transition-all duration-300 ${
                completingId === currentTask.id
                  ? "border-green-400 shadow-[0_0_30px_rgba(74,222,128,0.3)] bg-green-400/10"
                  : "border-[#11b4eb]/40 bg-card shadow-[0_0_20px_rgba(17,180,235,0.08)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <Badge className="bg-[#11b4eb]/20 text-[#11b4eb] border-[#11b4eb]/30 hover:bg-[#11b4eb]/20">
                  🎯 Taak {completedTodayCount + 1} van 3
                </Badge>
                <button
                  onClick={() => deleteTask(currentTask.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors p-1"
                  aria-label="Taak verwijderen"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <p className="text-xl font-semibold leading-snug">{currentTask.text}</p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => handleComplete(currentTask.id, e)}
                className="w-full py-3 rounded-xl font-bold text-base bg-[#11b4eb] text-white hover:bg-[#11b4eb]/90 transition-colors flex items-center justify-center gap-2"
              >
                <Check size={20} />
                GEDAAN! +50 pts
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No tasks state */}
        {todayTasks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-dashed border-border p-8 text-center space-y-2"
          >
            <p className="text-3xl">✨</p>
            <p className="font-semibold">Voeg je taken toe hieronder</p>
            <p className="text-muted-foreground text-sm">Max 3 taken per dag — focus is de sleutel</p>
          </motion.div>
        )}

        {/* Upcoming tasks */}
        {upcomingTasks.length > 0 && (
          <div className="space-y-3">
            <AnimatePresence>
              {upcomingTasks.map((task, i) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0.5, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card/50"
                >
                  <span className="w-5 h-5 rounded-full border-2 border-muted-foreground/40 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground flex-1">
                    Taak {completedTodayCount + i + 2}: {task.text}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-muted-foreground/40 hover:text-destructive transition-colors"
                  >
                    <Trash2 size={13} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Completed tasks */}
        {completedTasks.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Afgerond</p>
            <AnimatePresence>
              {completedTasks.map((task) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-400/5 border border-green-400/20"
                >
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-white" />
                  </div>
                  <span className="text-sm line-through text-muted-foreground">{task.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Progress */}
        {todayTasks.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Voortgang vandaag</span>
              <span className="font-semibold">
                {completedTodayCount}/3 klaar
              </span>
            </div>
            <Progress value={progressPercent} className="h-3" />
          </div>
        )}

        {/* Add task input */}
        {todayTasks.length < 3 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {todayTasks.length === 0
                ? "Wat zijn je 3 belangrijkste taken vandaag?"
                : `Nog ${3 - todayTasks.length} taak${3 - todayTasks.length > 1 ? "en" : ""} toevoegen`}
            </p>
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
                placeholder={`Taak ${todayTasks.length + 1}...`}
                className="flex-1 bg-card border-border focus-visible:ring-[#11b4eb]"
                maxLength={100}
              />
              <Button
                onClick={handleAddTask}
                disabled={!inputValue.trim()}
                className="bg-[#11b4eb] hover:bg-[#11b4eb]/90 text-white px-4"
              >
                <Plus size={18} />
              </Button>
            </div>
          </div>
        )}

        {/* Level info */}
        <div className="border-t border-border pt-6 text-center space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Jouw level</p>
          <p className="font-bold text-lg">{state.level}</p>
          <div className="flex justify-center gap-4 text-xs text-muted-foreground mt-2">
            <span>🌱 0-200</span>
            <span>📈 200-500</span>
            <span>🔥 500-1000</span>
            <span>💎 1000+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
