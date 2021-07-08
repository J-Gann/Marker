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

  /**
   * Get the marker for an image and markerID
   * @param {string} imageName
   * @param {string} markerID
   * @returns {Object | boolean} Marker
   */
  const getMarker = (imageName, markerID) => {
    const markersList = getMarkers(imageName);
    const markerList = markersList.filter((marker) => marker.id === markerID);
    if (markerList.length > 1)
      console.warn("Multiple Markers with the same ID found");
    if (markerList.length === 0)
      throw new Error(`Marker with ID ${markerID} not found`);
    if (markerList.length === 1) return markerList[0];
  };

  /**
   * Get list of markers for an image
   * @param {string} imageName
   * @returns {Array | boolean} List of markers
   */
  const getMarkers = (imageName) => {
    const markerList = markers[imageName];
    if (!markerList) throw new Error(`Image with name ${imageName} not found`);
    else return markerList;
  };

  /**
   * Change content of an existing marker
   * @param {string} imageName
   * @param {string} markerID
   * @param {number} x
   * @param {number} y
   */
  const setMarker = (imageName, markerID, x, y, newID) => {
    const marker = getMarker(imageName, markerID);
    if (x) marker.x = x;
    if (y) marker.y = y;
    if (newID) marker.id = newID;
    setMarkers({ ...markers });
  };

  /**
   * Remove a marker
   * @param {string} imageName
   * @param {string} markerID
   */
  const removeMarker = (imageName, markerID) => {
    const markerList = getMarkers(imageName);
    const marker = getMarker(imageName, markerID); // Throws if marker not found
    markerList.forEach((marker, index) => {
      if (marker.id === markerID) delete markerList[index];
    });
    setMarkers({ ...markers });
  };

  /**
   * Add a new marker
   * @param {string} imageName
   * @param {string} markerID
   * @param {number} x
   * @param {number} y
   */
  const addMarker = (imageName, markerID, x, y) => {
    const markerList = getMarkers(imageName);
    markerList.push({ id: markerID, x: x, y: y });
    setMarkers({ ...markers });
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
