import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Shopify Live Globe 2025 palette
const SHOPIFY_GREEN = '#9dc44d'
const SHOPIFY_ORANGE = '#f49f46'

function AnimatedGlobe() {
  const meshRef = useRef()
  const innerRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = state.clock.elapsedTime * -0.2
    }
  })

  return (
    <group>
      {/* Outer wireframe globe - dot matrix style */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color={SHOPIFY_GREEN}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* Inner glow */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[1.85, 24, 24]} />
        <meshBasicMaterial
          color={SHOPIFY_ORANGE}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
      {/* Glow rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 2.2, 32]} />
        <meshBasicMaterial color={SHOPIFY_ORANGE} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <ringGeometry args={[1.5, 2.2, 32]} />
        <meshBasicMaterial color={SHOPIFY_GREEN} transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default function Globe3D({ className = '' }) {
  return (
    <div className={`w-full h-full min-h-[400px] ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={SHOPIFY_GREEN} />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color={SHOPIFY_ORANGE} />
        <AnimatedGlobe />
      </Canvas>
    </div>
  )
}
