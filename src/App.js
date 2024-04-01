import React, { useEffect } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";

const Cube = () => {
  return (
    <Entity
      geometry={{ primitive: "box" }}
      position={{ x: 0, y: 0, z: -5 }}
      material={{ color: "#EF2D5E" }}
    />
  );
};

function App() {
  useEffect(() => {
    // Ensure that WebXR is supported
    if (!navigator.xr) {
      alert("WebXR not supported. Please try a different browser.");
    }
  }, []);

  return (
    <div className="App">
      <Scene>
        <Entity camera />
        <Cube />
      </Scene>
    </div>
  );
}

export default App;
