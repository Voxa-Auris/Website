import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Subtle rotation
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
    
    // Glow intensity pulse
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.5 + Math.sin(time * 0.5) * 0.3;
    }
  });
  
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      gradient.addColorStop(0, '#f4dd8d');
      gradient.addColorStop(0.5, '#11b4eb');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);
  
  return (
    <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.5}>
      <MeshDistortMaterial
        ref={materialRef}
        map={gradientTexture}
        color="#f4dd8d"
        emissive="#11b4eb"
        emissiveIntensity={0.5}
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

const AIOrb = () => {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#11b4eb" intensity={0.5} />
        <AnimatedOrb />
      </Canvas>
    </div>
  );
};

export default AIOrb;
