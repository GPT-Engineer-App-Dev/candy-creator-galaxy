import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const CandyShape = ({ shape, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y += 0.01;
  });

  const getGeometry = () => {
    switch (shape) {
      case 'round':
        return new THREE.SphereGeometry(1, 32, 32);
      case 'heart':
        const heartShape = new THREE.Shape();
        heartShape.moveTo(0, 0.8);
        heartShape.bezierCurveTo(0, 1.1, 0.3, 1.4, 0.8, 1.4);
        heartShape.bezierCurveTo(1.3, 1.4, 1.6, 1.1, 1.6, 0.8);
        heartShape.bezierCurveTo(1.6, 0.5, 1.3, 0.2, 0.8, -0.2);
        heartShape.bezierCurveTo(0.3, 0.2, 0, 0.5, 0, 0.8);
        return new THREE.ExtrudeGeometry(heartShape, { depth: 0.5, bevelEnabled: true, bevelSegments: 8, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 });
      case 'star':
        const starShape = new THREE.Shape();
        for (let i = 0; i < 5; i++) {
          const angle = (i * 4 * Math.PI) / 5;
          const x = Math.cos(angle);
          const y = Math.sin(angle);
          if (i === 0) starShape.moveTo(x, y);
          else starShape.lineTo(x, y);
        }
        return new THREE.ExtrudeGeometry(starShape, { depth: 0.5, bevelEnabled: true, bevelSegments: 8, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 });
      default:
        return new THREE.BoxGeometry(1, 1, 1);
    }
  };

  const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    metalness: 0.1,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  return (
    <mesh ref={meshRef} geometry={getGeometry()} material={material} />
  );
};

const CandyPreview3D = ({ shape, color }) => {
  return (
    <div className="w-full h-64 bg-gray-100/50 rounded-lg backdrop-blur-sm">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <CandyShape shape={shape} color={color} />
      </Canvas>
    </div>
  );
};

export default CandyPreview3D;