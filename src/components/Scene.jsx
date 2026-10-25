import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const pointer = { x: 0, y: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

// A perspective "room" of grid lines: floor, back wall, side walls and ceiling.
function GridRoom() {
  const group = useMemo(() => {
    const g = new THREE.Group();
    const mk = () => {
      const h = new THREE.GridHelper(24, 24, '#34343f', '#24242c');
      h.material.transparent = true;
      h.material.opacity = 0.9;
      return h;
    };
    const floor = mk();
    floor.position.set(0, -3, -6);
    const back = mk();
    back.rotation.x = Math.PI / 2;
    back.position.set(0, 4, -18);
    const left = mk();
    left.rotation.z = Math.PI / 2;
    left.position.set(-12, 4, -6);
    const right = mk();
    right.rotation.z = Math.PI / 2;
    right.position.set(12, 4, -6);
    const ceil = mk();
    ceil.position.set(0, 11, -6);
    g.add(floor, back, left, right, ceil);
    return g;
  }, []);
  return <primitive object={group} />;
}

function Glossy({ color, ...props }) {
  return <meshPhysicalMaterial color={color} roughness={0.18} metalness={0.1} clearcoat={1} clearcoatRoughness={0.15} {...props} />;
}

function Spin({ children, speed = 0.3, ...props }) {
  const ref = useRef();
  useFrame((_, d) => {
    ref.current.rotation.x += d * speed * 0.6;
    ref.current.rotation.y += d * speed;
  });
  return (
    <group ref={ref} {...props}>
      {children}
    </group>
  );
}

function Objects() {
  const { size } = useThree();
  if (size.width < 700) return <CompactObjects />;
  return (
    <>
      <Float speed={1.4} floatIntensity={1.2} rotationIntensity={0.4}>
        <Spin position={[-5.2, 1.4, -2]} speed={0.25}>
          <RoundedBox args={[1.1, 1.1, 1.1]} radius={0.18} smoothness={5}>
            <Glossy color="#ffc145" />
          </RoundedBox>
        </Spin>
      </Float>
      <Float speed={1.1} floatIntensity={1.4}>
        <Spin position={[7.4, 0.6, -3]} speed={0.35}>
          <mesh>
            <torusGeometry args={[0.7, 0.26, 32, 64]} />
            <Glossy color="#7b61ff" />
          </mesh>
        </Spin>
      </Float>
      <Float speed={1.6} floatIntensity={1}>
        <Spin position={[4.6, -0.6, -1]} speed={0.4}>
          <mesh>
            <octahedronGeometry args={[0.6, 0]} />
            <Glossy color="#ff6b6b" flatShading />
          </mesh>
        </Spin>
      </Float>
      <Float speed={1.3} floatIntensity={1.3}>
        <mesh position={[-4.4, -0.8, -1.5]}>
          <sphereGeometry args={[0.55, 48, 48]} />
          <Glossy color="#4cc9f0" />
        </mesh>
      </Float>
      <Float speed={0.9} floatIntensity={1}>
        <Spin position={[-8, 3.4, -6]} speed={0.2}>
          <mesh>
            <torusKnotGeometry args={[0.45, 0.14, 128, 16]} />
            <Glossy color="#2ed3a8" />
          </mesh>
        </Spin>
      </Float>
      <Float speed={1} floatIntensity={1.2}>
        <Spin position={[6.2, 5, -7]} speed={0.3}>
          <mesh>
            <icosahedronGeometry args={[0.55, 0]} />
            <Glossy color="#ff7eb6" flatShading />
          </mesh>
        </Spin>
      </Float>
    </>
  );
}

// Phones: fewer, smaller shapes kept away from the headline.
function CompactObjects() {
  return (
    <>
      <Float speed={1.2} floatIntensity={0.8}>
        <Spin position={[-2.3, -1.6, -2]} speed={0.3} scale={0.7}>
          <RoundedBox args={[1.1, 1.1, 1.1]} radius={0.18} smoothness={5}>
            <Glossy color="#ffc145" />
          </RoundedBox>
        </Spin>
      </Float>
      <Float speed={1.1} floatIntensity={0.8}>
        <Spin position={[2.4, -1.4, -2]} speed={0.35} scale={0.6}>
          <mesh>
            <torusGeometry args={[0.7, 0.26, 32, 64]} />
            <Glossy color="#7b61ff" />
          </mesh>
        </Spin>
      </Float>
    </>
  );
}

// Dolly in on load, then drift with the pointer for parallax.
function CameraRig() {
  const { camera } = useThree();
  const start = useRef(null);
  useFrame((state) => {
    if (start.current === null) start.current = state.clock.elapsedTime;
    const t = Math.min((state.clock.elapsedTime - start.current) / 2.2, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.8, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.6 + pointer.y * 0.4, 0.04);
    camera.position.z = THREE.MathUtils.lerp(16, 9, ease);
    camera.lookAt(0, 0.6, -4);
  });
  return null;
}

export default function Scene({ active = true }) {
  return (
    <Canvas frameloop={active ? 'always' : 'never'} dpr={[1, 1.75]} camera={{ position: [0, 0.6, 16], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={['#0d0d10', 9, 26]} />
      <ambientLight intensity={0.6} />
      <hemisphereLight args={['#ffffff', '#1a1a22', 0.7]} />
      <directionalLight position={[4, 6, 6]} intensity={2} />
      <pointLight position={[-6, 2, 2]} intensity={30} color="#7b61ff" />
      <pointLight position={[6, -1, 2]} intensity={20} color="#4cc9f0" />
      <GridRoom />
      <Objects />
      <CameraRig />
    </Canvas>
  );
}
