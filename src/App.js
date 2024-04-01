import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Ensure that WebXR is supported
    if (!navigator.xr) {
      alert("WebXR not supported. Please try a different browser.");
    }
  }, []);

  return (
    <div className="App">
      <a-scene embedded arjs="trackingMethod: best;">
        <a-marker preset="hiro">
          <a-box color="red" scale="0.5 0.5 0.5"></a-box>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
