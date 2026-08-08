import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface AIBallProps {
  color?: string;
  accent?: string;
  followSpeed?: number;
  pulseSpeed?: number;
}

const AIBall = ({ 
  color = "#11b4eb", 
  accent = "#f4dd8d",
  followSpeed = 0.1,
  pulseSpeed = 2
}: AIBallProps) => {
  const ballRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ballRef.current) return;
      
      const rect = ballRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * followSpeed;
      const deltaY = (e.clientY - centerY) * followSpeed;
      
      mouseX.set(deltaX);
      mouseY.set(deltaY);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = Math.max(0.7, 1 - scrollY / 1000);
      if (ballRef.current) {
        ballRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY, followSpeed]);

  return (
    <div ref={ballRef} className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-300">
      <motion.div
        style={{ x, y }}
        className="relative w-full h-full"
      >
        {/* Main ball */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: pulseSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${accent}, ${color})`,
            boxShadow: `0 0 60px ${color}40, 0 0 120px ${color}20`,
          }}
        />
        
        {/* Glow layer */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: pulseSpeed * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, ${color}60, transparent 70%)`,
          }}
        />

        {/* Inner shimmer */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-8 rounded-full opacity-40"
          style={{
            background: `linear-gradient(135deg, ${accent}60 0%, transparent 50%, ${color}60 100%)`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default AIBall;
