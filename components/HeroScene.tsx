"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

function Blob({ color, speed, distort }: { color: string; speed: number; distort: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const light = useRef<THREE.PointLight>(null);
  useFrame((state) => {
    const { pointer } = state;
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.002 * speed;
    mesh.current.rotation.y += 0.003 * speed;
    // mouse parallax — near-instant follow
    mesh.current.position.x += (pointer.x * 0.6 - mesh.current.position.x) * 0.2;
    mesh.current.position.y += (pointer.y * 0.6 - mesh.current.position.y) * 0.2;
    if (light.current) {
      light.current.position.x = pointer.x * 5;
      light.current.position.y = pointer.y * 5;
    }
  });
  return (
    <>
      <pointLight ref={light} intensity={30} color={color} />
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.6, 64]} />
          <MeshDistortMaterial
            color={color}
            roughness={0.15}
            metalness={0.7}
            distort={distort}
            speed={speed}
          />
        </mesh>
      </Float>
      {/* orbiting ring */}
      <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
        <torusGeometry args={[2.6, 0.015, 16, 128]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, -0.3, 0.5]}>
        <torusGeometry args={[3.1, 0.01, 16, 128]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      {/* particles */}
      <Particles count={350} color={color} />
      <ContactShadows position={[0, -3.2, 0]} opacity={0.6} blur={2.5} color="#000" />
    </>
  );
}

function Particles({ count, color }: { count: number; color: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useRef<Float32Array>(
    new Float32Array(Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 12))
  );
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={color} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function HeroScene({
  color = "#d7ff3e",
  speed = 2,
  distort = 0.45,
}: {
  color?: string;
  speed?: number;
  distort?: number;
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute !inset-0"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Blob color={color} speed={speed} distort={distort} />
      <Environment preset="city" />
    </Canvas>
  );
}
