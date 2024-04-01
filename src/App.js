const Cube = () => {
  return (
    <a-entity
      geometry="primitive: box"
      position="0 0 -5"
      material="color: #EF2D5E"
    ></a-entity>
  );
};

function App() {
  return (
    <>
      <div className="App">
        <a-scene>
          <a-camera></a-camera>
          <Cube />
        </a-scene>
      </div>
    </>
  );
}

export default App;
