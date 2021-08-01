import "./App.css";

import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Canvas from "./components/canvas/Canvas";
import Editor from "./components/editor/Editor";

function App() {
  // Use images and markers as apps state => loading new resources results in new render
  const [images, setImages] = useState([]);
  const [markers, setMarkers] = useState({});

  // Resource modification functions to pass as prop to components
  // Arrow function guarantees that resources of "App" component are modified
  const handleNewImages = (newImages) => setImages(newImages);
  const handleNewMarkers = (newMarkers) => setMarkers(newMarkers);

  // Helper function for retrieving individual markers
  const getMarker = (imageTitle, markerID) => markers[imageTitle][markerID];

  // Helper function for modifying markers
  const setMarker = (imageTitle, markerID, x, y, newID) => {
    // Create copy of current markers
    const markerCopy = { ...markers };
    // Modify marker data
    if (!newID) {
      let marker = markerCopy[imageTitle][markerID];
      if (x) marker.x = x;
      if (y) marker.y = y;
    } else if (newID) {
      // If id should be changed, delete marker and recreate with new id
      delete markerCopy[imageTitle][markerID];
      markerCopy[imageTitle][newID] = {
        x: x,
        y: y,
      };
    }
    // Set modified marker object
    setMarkers(markerCopy);
  };

  // Helper function for retrieving markers of images
  const getMarkers = (imageTitle) =>
    markers[imageTitle] ? markers[imageTitle] : [];

  // Helper function for removing individual markers
  const removeMarker = (imageTitle, markerID) => {
    // Create copy of current markers
    const markerCopy = { ...markers };
    // Delete marker
    delete markerCopy[imageTitle][markerID];
    // Set modified marker object
    setMarkers(markerCopy);
  };

  // Helper function for adding markers
  const addMarker = (imageTitle, markerID, x, y) => {
    // Create copy of current markers
    const markerCopy = { ...markers };
    // Add new marker
    markerCopy[imageTitle][markerID] = {
      x: x,
      y: y,
    };
    // Set modified marker object
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
