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

  const getMarker = (imageTitle, markerID) => markers[imageTitle][markerID];

  const setMarker = (imageTitle, markerID, x, y, newID) => {
    const markerCopy = { ...markers };
    if (!newID) {
      let marker = markerCopy[imageTitle][markerID];
      if (x) marker.x = x;
      if (y) marker.y = y;
    } else if (newID) {
      delete markerCopy[imageTitle][markerID];
      markerCopy[imageTitle][newID] = {
        x: x,
        y: y,
      };
    }
    setMarkers(markerCopy);
  };

  const getMarkers = (imageTitle) =>
    markers[imageTitle] ? markers[imageTitle] : [];

  const removeMarker = (imageTitle, markerID) => {
    const markerCopy = { ...markers };
    delete markerCopy[imageTitle][markerID];
    setMarkers(markerCopy);
  };

  const addMarker = (imageTitle, markerID, x, y) => {
    const markerCopy = { ...markers };
    markerCopy[imageTitle][markerID] = {
      x: x,
      y: y,
    };
    setMarkers(markerCopy);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" id="app-navigation">
        <Navbar.Brand>Marker Visualization</Navbar.Brand>
      </Navbar>
      <div id="app-container">
        <Canvas
          images={images}
          markers={markers}
          markerOperations={{
            setMarker,
            getMarker,
            getMarkers,
            removeMarker,
            addMarker,
          }}
        ></Canvas>
        <Editor
          handleNewImages={handleNewImages}
          handleNewMarkers={handleNewMarkers}
          markerOperations={{
            setMarker,
            getMarker,
            getMarkers,
            removeMarker,
            addMarker,
          }}
          images={images}
          markers={markers}
        ></Editor>
      </div>
    </>
  );
}

export default App;
