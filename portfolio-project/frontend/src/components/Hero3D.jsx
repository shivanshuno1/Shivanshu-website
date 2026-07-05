import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, Icosahedron, Line } from '@react-three/drei';
import * as THREE from 'three';

// A ring of nodes orbiting the central core, connected by faint lines —
// a stand-in "knowledge graph" linking data science + full-stack skills.
function NodeNetwork() {
  const group = useRef();
  const nodeCount = 18;

  const nodes = useMemo(() => {
    const pts = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 3.4;
      pts.push(
        new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        )
      );
    }
    return pts;
  }, []);

  const lines = useMemo(() => {
    const segs = [];
    for (let i = 0; i < nodes.length; i++) {
      const next = nodes[(i + 3) % nodes.length];
      segs.push([nodes[i], next]);
    }
    return segs;
  }, [nodes]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.095;
      group.current.rotation.x += delta * 0.03;
      group.current.rotation.z += delta * 0.01;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#4FF3D0' : '#8B7CF6'}
            emissive={i % 3 === 0 ? '#4FF3D0' : '#8B7CF6'}
            emissiveIntensity={1.8}
          />
        </mesh>
      ))}
      {lines.map((pair, i) => (
        <Line key={i} points={pair} color="#4FF3D0" transparent opacity={0.14} lineWidth={1} />
      ))}
    </group>
  );
}

function Core() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.08;
    }
  });
  return (
    <Float speed={1.9} rotationIntensity={0.55} floatIntensity={1.1}>
      <Icosahedron ref={meshRef} args={[1.4, 3]}>
        <MeshDistortMaterial
          color="#0B0E16"
          emissive="#4FF3D0"
          emissiveIntensity={0.35}
          roughness={0.08}
          metalness={0.7}
          distort={0.42}
          speed={2.3}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

function Rings() {
  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}> 
        <torusGeometry args={[2.4, 0.03, 16, 128]} />
        <meshBasicMaterial color="#4FF3D0" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}> 
        <torusGeometry args={[2.7, 0.02, 12, 128]} />
        <meshBasicMaterial color="#8B7CF6" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

function Rig() {
  // Subtle camera parallax that follows the pointer.
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 0.64 - camera.position.x) * 0.025;
    camera.position.y += (pointer.y * 0.48 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[5, 5, 5]} intensity={1.4} color="#4FF3D0" />
      <pointLight position={[-4, -2, -5]} intensity={1.1} color="#8B7CF6" />
      <pointLight position={[0, 6, 2]} intensity={0.6} color="#FFFFFF" />
      <Stars radius={65} depth={48} count={2800} factor={2.4} saturation={0} fade speed={0.8} />
      <Rings />
      <Core />
      <NodeNetwork />
      <Rig />
    </Canvas>
  );
}
