import { useEffect, useRef, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  /** Pixel radius around the element where the cursor activates the pull. */
  radius?: number;
  /** Maximum offset (px) the element travels toward the cursor. */
  max?: number;
  className?: string;
}

/**
 * Wraps a single CTA so it physically leans toward the cursor when nearby.
 * Uses a spring (stiffness 200, damping 20) and a per-frame RAF loop.
 * Disabled on coarse pointers (touch) — there it just gets a CSS active scale.
 */
export default function Magnetic({
  children,
  radius = 80,
  max = 8,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isCoarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isCoarse) return;

    const stiffness = 200;
    const damping = 20;
    let target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    let raf = 0;

    const step = () => {
      const dt = 1 / 60;
      const ax = (target.x - pos.x) * stiffness - vel.x * damping;
      const ay = (target.y - pos.y) * stiffness - vel.y * damping;
      vel.x += ax * dt;
      vel.y += ay * dt;
      pos.x += vel.x * dt;
      pos.y += vel.y * dt;
      if (
        Math.abs(pos.x) < 0.05 &&
        Math.abs(pos.y) < 0.05 &&
        Math.abs(target.x) < 0.05 &&
        Math.abs(target.y) < 0.05
      ) {
        el.style.transform = "";
      } else {
        el.style.transform = `translate3d(${pos.x.toFixed(2)}px,${pos.y.toFixed(2)}px,0)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const halfW = r.width / 2;
      const halfH = r.height / 2;
      const ex = Math.max(0, Math.abs(dx) - halfW);
      const ey = Math.max(0, Math.abs(dy) - halfH);
      const dist = Math.sqrt(ex * ex + ey * ey);
      if (dist < radius) {
        const strength = 1 - dist / radius;
        const norm = Math.sqrt(dx * dx + dy * dy) || 1;
        target = {
          x: (dx / norm) * max * strength,
          y: (dy / norm) * max * strength,
        };
      } else {
        target = { x: 0, y: 0 };
      }
    };
    const onLeave = () => {
      target = { x: 0, y: 0 };
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [radius, max]);

  return (
    <span ref={ref} className={`va-magnetic ${className}`}>
      {children}
    </span>
  );
}
