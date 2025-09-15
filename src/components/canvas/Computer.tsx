import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ scale, position }: { scale: number; position: [number, number, number] }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  
  return (
    <mesh>
      {/* Lights */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      {/* Model */}
      <primitive object={computer.scene} scale={scale} position={position} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [dimensions, setDimensions] = useState<{ scale: number; position: [number, number, number] } | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        // Mobile: moved from [0, -2.8, -1.8] to [0, -1.5, -1.8] (1.3 units higher)
        setDimensions({ scale: 0.75, position: [0, -1.5, -1.8] });
      } else {
        // Desktop: moved from [0, -3.25, -1.5] to [0, -2, -1.5] (1.25 units higher)
        setDimensions({ scale: 0.75, position: [0, 0, -1.5] });
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!dimensions) return null; // prevent SSR mismatch

  return (
    <div className="w-full h-[300px]  md:h-[600px] lg:h-[600px]">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers  scale={dimensions.scale} position={dimensions.position} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;