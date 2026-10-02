import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

function JapaneseChawan({ isHovered }) {
  const meshGroup = useRef();
  const liquidRef = useRef();

  useFrame((state, delta) => {
    if (meshGroup.current) {
      meshGroup.current.rotation.y += delta * (isHovered ? 0.4 : 0.2);
      const targetRotX = (state.pointer.y * 0.25) + 0.35;
      const targetRotZ = (-state.pointer.x * 0.25);
      meshGroup.current.rotation.x = THREE.MathUtils.lerp(meshGroup.current.rotation.x, targetRotX, 0.05);
      meshGroup.current.rotation.z = THREE.MathUtils.lerp(meshGroup.current.rotation.z, targetRotZ, 0.05);
    }
    if (liquidRef.current) {
      liquidRef.current.rotation.z += delta * 0.1;
    }
  });

  const bowlPoints = useMemo(() => {
    const points = [];
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.8, 0));
    points.push(new THREE.Vector2(0.85, 0.25));
    points.push(new THREE.Vector2(0.75, 0.3));
    points.push(new THREE.Vector2(1.1, 0.5));
    points.push(new THREE.Vector2(1.6, 1.1));
    points.push(new THREE.Vector2(1.85, 1.8));
    points.push(new THREE.Vector2(1.9, 2.3));
    points.push(new THREE.Vector2(1.78, 2.3));
    points.push(new THREE.Vector2(1.72, 1.8));
    points.push(new THREE.Vector2(1.45, 1.1));
    points.push(new THREE.Vector2(1.0, 0.6));
    points.push(new THREE.Vector2(0.3, 0.35));
    points.push(new THREE.Vector2(0, 0.35));
    return points;
  }, []);

  return (
    <group ref={meshGroup} position={[0, -0.6, 0]}>
      <mesh castShadow receiveShadow>
        <latheGeometry args={[bowlPoints, 48]} />
        <meshStandardMaterial color="#2A2826" roughness={0.72} metalness={0.12} />
      </mesh>
      <mesh position={[0, 1.95, 0]}>
        <cylinderGeometry args={[1.88, 1.84, 0.7, 48, 1, true]} />
        <meshStandardMaterial color="#52634F" roughness={0.35} metalness={0.2} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={liquidRef} position={[0, 1.65, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.58, 48]} />
        <meshStandardMaterial color="#6C7F67" roughness={0.18} metalness={0.25} />
      </mesh>
      <group position={[0.2, 2.4, 0]} rotation={[0.08, 0.3, -0.05]}>
        <mesh position={[-0.08, 0, 0]} rotation={[Math.PI / 2, 0, 0.15]} castShadow>
          <cylinderGeometry args={[0.035, 0.065, 3.8, 16]} />
          <meshStandardMaterial color="#8D5B4C" roughness={0.6} />
        </mesh>
        <mesh position={[0.1, 0, 0]} rotation={[Math.PI / 2, 0, 0.11]} castShadow>
          <cylinderGeometry args={[0.035, 0.065, 3.8, 16]} />
          <meshStandardMaterial color="#8D5B4C" roughness={0.6} />
        </mesh>
        <mesh position={[0.7, -0.15, -1.0]} rotation={[0, 0.3, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.45]} />
          <meshStandardMaterial color="#C84B31" roughness={0.3} />
        </mesh>
      </group>
      <SteamParticles />
    </group>
  );
}

const STEAM_PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  x: ((i % 5) - 2) * 0.22,
  y: 1.8 + (i * 0.11),
  z: (((i * 3) % 5) - 2) * 0.22,
  speed: 0.35 + ((i % 4) * 0.08),
  scale: 0.09 + ((i % 3) * 0.03),
  phase: (i * Math.PI) / 9,
}));

function SteamParticles() {
  const particlesRef = useRef();

  useFrame((state, delta) => {
    if (!particlesRef.current) return;
    particlesRef.current.children.forEach((mesh, i) => {
      const p = STEAM_PARTICLES[i];
      mesh.position.y += delta * p.speed;
      mesh.position.x += Math.sin(state.clock.elapsedTime * 1.5 + p.phase) * 0.005;
      if (mesh.position.y > 3.8) {
        mesh.position.y = 1.8;
      }
    });
  });

  return (
    <group ref={particlesRef}>
      {STEAM_PARTICLES.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.scale, 8, 8]} />
          <meshBasicMaterial color="#EAE5DC" transparent opacity={0.22} />
        </mesh>
      ))}
    </group>
  );
}

function ZenLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#8A9A86] border-t-transparent animate-spin" />
        <span className="text-xs text-[#1A1A1A]/60 font-serif tracking-widest">
          MEMUAT KANVAS 3D...
        </span>
      </div>
    </Html>
  );
}

export default function Hero3D() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] flex items-center justify-center select-none"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <Canvas
        shadows
        camera={{ position: [0, 2.4, 5.0], fov: 42 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={1.1} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-4, 3, -2]} intensity={0.6} color="#F9F8F6" />
        <pointLight position={[0, 2, 1]} intensity={0.5} color="#C84B31" />

        <React.Suspense fallback={<ZenLoader />}>
          <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.3}>
            <JapaneseChawan isHovered={isHovered} />
          </Float>
        </React.Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.1}
          dampingFactor={0.06}
        />
      </Canvas>

      <div className="absolute bottom-4 right-4 pointer-events-none bg-[#F9F8F6]/90 backdrop-blur-xs border border-[#E5E0D8] px-3 py-1.5 rounded-md text-[11px] text-[#1A1A1A]/70 flex items-center gap-1.5 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#8A9A86] animate-pulse" />
        <span>3D Interaktif: Klik & geser untuk memutar</span>
      </div>
    </div>
  );
}
