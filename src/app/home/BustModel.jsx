import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Model } from "../model/Scene";
import { Environment, OrbitControls } from "@react-three/drei";

const BustModel = () => {
  const modelRef = useRef();
  const RotatingMesh = () => {
    const modelRef = useRef();
    useFrame(({ clock }) => {
      modelRef.current.rotation.y = -clock.getElapsedTime();
    });
    return <Model modelRef={modelRef} />;
  };
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [10, 4, 2] }}
    >
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
      <RotatingMesh />
    </Canvas>
  );
};

export default BustModel;
