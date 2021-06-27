import "./App.css";

import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Canvas from "./components/canvas/Canvas";
import Editor from "./components/editor/Editor";

function App() {
  const [images, setImages] = useState([]);
  const [markers, setMarkers] = useState({});

  const handleNewImages = (newImages) => setImages(newImages);
  const handleNewMarkers = (newMarkers) => setMarkers(newMarkers);

  return (
    <>
      <div id="app-navigation">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Marker Visualization</Navbar.Brand>
        </Navbar>
      </div>
      <div id="app-container">
        <Canvas images={images} markers={markers}></Canvas>
        <Editor
          handleNewImages={handleNewImages}
          images={images}
          handleNewMarkers={handleNewMarkers}
          markers={markers}
        ></Editor>
      </div>
    </>
  );
}

export default App;
