import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";

function App() {
  useEffect(() => {
    // Ensure that WebXR is supported
    if (!navigator.xr) {
      alert("WebXR not supported. Please try a different browser.");
    }
  }, []);

  return (
    <>
      <ARButton />
      {/* <VRButton /> */}

      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <XR>
          <color attach={"background"} args={["#011"]} />
          <Hands />

          <OrbitControls />
          <ambientLight />
          <mesh position={[0, 0, -5]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={"red"} />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
