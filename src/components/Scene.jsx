import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Shared pointer so the mascot looks at the cursor anywhere on the page.
const pointer = { x: 0, y: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

function Eye({ position }) {
  const pupil = useRef();
  useFrame(() => {
    if (!pupil.current) return;
    pupil.current.position.x = THREE.MathUtils.lerp(pupil.current.position.x, pointer.x * 0.09, 0.15);
    pupil.current.position.y = THREE.MathUtils.lerp(pupil.current.position.y, pointer.y * 0.09 - 0.02, 0.15);
  });
  return (
    <group position={position}>
      <mesh scale={[1, 1, 0.55]}>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshStandardMaterial color="#fff" roughness={0.25} />
      </mesh>
      <mesh scale={[1.08, 1.08, 0.5]} position={[0, 0, -0.01]}>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh ref={pupil} position={[0, 0, 0.13]} scale={[1, 1, 0.4]}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial color="#0b0b0b" roughness={0.1} />
      </mesh>
    </group>
  );
}

function Mascot() {
  const group = useRef();
  const blink = useRef(0);
  const eyes = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.45, 0.06);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.2, 0.06);
      group.current.position.y = Math.sin(t * 1.6) * 0.08 - 0.15;
      const s = 1 + Math.sin(t * 3.2) * 0.012;
      group.current.scale.set(1 / s, s, 1);
    }
    // blink every ~3.5s
    blink.current = (t % 3.5) < 0.12 ? 0.1 : 1;
    if (eyes.current) eyes.current.scale.y = THREE.MathUtils.lerp(eyes.current.scale.y, blink.current, 0.5);
  });
  const yellow = '#ffc53d';
  return (
    <group ref={group}>
      <RoundedBox args={[1.9, 1.7, 1.2]} radius={0.32} smoothness={6}>
        <meshStandardMaterial color={yellow} roughness={0.35} />
      </RoundedBox>
      {[-0.66, -0.22, 0.22, 0.66].map((x) => (
        <mesh key={x} position={[x, 0.82, 0]} scale={[1, 0.85, 1.3]}>
          <sphereGeometry args={[0.27, 32, 32]} />
          <meshStandardMaterial color={yellow} roughness={0.35} />
        </mesh>
      ))}
      <group ref={eyes} position={[0, 0.15, 0.6]}>
        <Eye position={[-0.36, 0, 0]} />
        <Eye position={[0.36, 0, 0]} />
      </group>
      {/* smile */}
      <mesh position={[0, -0.32, 0.6]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.16, 0.035, 12, 32, Math.PI]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      {/* cheeks */}
      {[-0.62, 0.62].map((x) => (
        <mesh key={x} position={[x, -0.2, 0.58]} scale={[1, 0.6, 0.3]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#ff8a5c" roughness={0.6} />
        </mesh>
      ))}
      {/* little hands */}
      {[-1.02, 1.02].map((x) => (
        <mesh key={x} position={[x, -0.25, 0.2]} rotation={[0, 0, x > 0 ? -0.5 : 0.5]}>
          <capsuleGeometry args={[0.12, 0.25, 8, 16]} />
          <meshStandardMaterial color="#f2b021" roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function Shape({ position, color, kind, speed = 1, scale = 1 }) {
  const ref = useRef();
  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.x += d * 0.4 * speed;
      ref.current.rotation.y += d * 0.6 * speed;
    }
  });
  const geo = {
    torus: <torusGeometry args={[0.35, 0.15, 24, 48]} />,
    ico: <icosahedronGeometry args={[0.38, 0]} />,
    capsule: <capsuleGeometry args={[0.18, 0.45, 8, 16]} />,
    cone: <coneGeometry args={[0.32, 0.6, 4]} />,
    knot: <torusKnotGeometry args={[0.25, 0.09, 96, 16]} />,
  }[kind];
  return (
    <Float speed={2 * speed} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale}>
        {geo}
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.05} />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7.2], fov: 40 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.9} />
      <hemisphereLight args={["#fff6e0", "#2a1f3d", 0.8]} />
      <directionalLight position={[3, 5, 4]} intensity={1.6} />
      <directionalLight position={[-4, -2, 2]} intensity={0.5} color="#c58cff" />
      <Mascot />
      <Shape kind="torus" position={[-2.3, 1.2, -0.5]} color="#c58cff" />
      <Shape kind="ico" position={[2.4, 1.3, -0.8]} color="#ff6a1a" speed={0.8} />
      <Shape kind="capsule" position={[2.2, -1.3, 0]} color="#5ec8ff" speed={1.2} />
      <Shape kind="cone" position={[-2.2, -1.2, 0.2]} color="#ff5d8f" speed={0.9} />
      <Shape kind="knot" position={[0.2, 2.0, -1.5]} color="#3ddc97" speed={0.6} scale={0.8} />
      <ContactShadows position={[0, -1.35, 0]} opacity={0.5} scale={8} blur={2.6} far={3} />
    </Canvas>
  );
}
