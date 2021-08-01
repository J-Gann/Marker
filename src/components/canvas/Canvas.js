import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Circle, Image, Line } from "react-konva";

import "./Canvas.css";
import CanvasControl from "./CanvasControl";

const Canvas = ({ images, markers, markerOperations }) => {
  // Set size as state => new render on each size change
  const [size, setSize] = useState({ width: 0, height: 0 });
  // Access parent component for adjusting size of canvas to parent component
  const canvasContainer = useRef(null);
  // Set current image as state => new render ech time the index changes
  const [currentImage, setCurrentImage] = useState(0);

  // Retrieve current image based on state
  const img = images[currentImage];

  // Effec for adjusting canvas size
  useEffect(() => {
    // Retrieve size of parent container
    const { clientWidth, clientHeight } = canvasContainer.current;
    const newSize = { width: clientWidth, height: clientHeight };
    // Set canvas size to size of parent component
    setSize(newSize); // => Initial size set

    // Change size of canvas on each "rezise" event
    const handleResize = () => {
      const { clientWidth, clientHeight } = canvasContainer.current;
      const newSize = {
        width: clientWidth,
        height: clientHeight,
      };
      setSize(newSize);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If current image is undefined, display empty canvas
  if (!img)
    return (
      <div className="canvas">
        <div ref={canvasContainer} className="canvas-container"></div>
        <div>
          <CanvasControl
            setCurrentImage={setCurrentImage}
            imagesLength={images.length}
            markerOperations={markerOperations}
          ></CanvasControl>
        </div>
      </div>
    );

  // Calculate width and height scale of image to fit size of canvas
  const scaleWidth = size.width / img.width;
  const scaleHeight = size.height / img.height;
  // Select smallest scale to fit image to canvas size while keeping aspect ratio
  const scale = scaleWidth < scaleHeight ? scaleWidth : scaleHeight;
  // Calculate image width based on scale
  const width = img.width * scale;
  // Calculate offset to center image
  const offsetX = (size.width - width) / 2;
  // Calculate image height based on scale
  const height = img.height * scale;
  // Calculate offset to center image
  const offsetY = (size.height - height) / 2;

  // Draw markers of current image on canvas
  const renderMarkers = () => {
    // Retrieve markers of current image
    const currentMarkers = markerOperations.getMarkers(img.name);
    return Object.keys(currentMarkers).map((id) => {
      // For each marker id of current image, get x and y properties
      const { x, y } = markerOperations.getMarker(img.name, id);
      // Return Konva circle to be drawn on canvas
      return (
        <Circle
          key={`marker_${currentImage}_${id}`} // Unique id of circle
          x={x * scale + offsetX} // Scaled and offset marker x value
          y={y * scale + offsetY} // Scaled and offset marker y value
          radius={10 * scale} // Radius of circle adabtive to image scale
          fill={"red"}
          stroke={"black"}
          draggable={true} // Enable marker to be dragged
          tension={0.5}
          onDragEnd={(e) =>
            // If marker is dragged, change properties of corresponding marker
            markerOperations.setMarker(
              img.name,
              id,
              e.target.x() / scale - offsetX / scale, // Revert applied scale of marker position
              e.target.y() / scale - offsetY / scale // Revert applied scale of marker position
            )
          }
        ></Circle>
      );
    });
  };

  // Draw marker lines for markers of current image
  const renderMarkerLine = (size) => {
    // Get markers of current image
    const currentMarkers = markerOperations.getMarkers(img.name);
    return Object.keys(currentMarkers).map((id) => {
      // For each marker id of current image calculate x and y properties of the marker in previous images
      let points1 = []; // List of x and y values of previous images: [x1, y1, x2, y2, ...]
      // Iterate through past images
      for (let cnt = currentImage - size; cnt <= currentImage; cnt++) {
        // Retrieve selected image
        const img = images[cnt];
        // Retrieve markers of selected image
        const currentMarkers = markerOperations.getMarkers(img && img.name);
        // Retrieve marker which has the correct id
        const currentMarker = currentMarkers[id];
        if (currentMarker) {
          // Add scaled x and y values of marker to array
          points1.push(currentMarker["x"] * scale + offsetX);
          points1.push(currentMarker["y"] * scale + offsetY);
        }
      }
      // For each marker id of current image calculate x and y properties of the marker in future images
      let points2 = []; // List of x and y values of future images: [x1, y1, x2, y2, ...]
      // Iterate through future images
      for (let cnt = currentImage; cnt < currentImage + size + 1; cnt++) {
        // Retrieve selected image
        const img = images[cnt];
        // Retrieve markers of selected image
        const currentMarkers = markerOperations.getMarkers(img && img.name);
        // Retrieve marker which has the correct id
        const currentMarker = currentMarkers[id];
        if (currentMarker) {
          // Add scaled x and y values of marker to array
          points2.push(currentMarker["x"] * scale + offsetX);
          points2.push(currentMarker["y"] * scale + offsetY);
        }
      }
      // Return Konva lines for future and past histroy of marker
      return [
        <Line
          key={`linePast_${currentImage}_${id}`}
          points={points1}
          stroke={"blue"}
          strokeWidth={4}
        ></Line>,
        <Line
          key={`lineFuture_${currentImage}_${id}`}
          points={points2}
          stroke={"green"}
          strokeWidth={4}
        ></Line>,
      ];
    });
  };

  return (
    <div className="canvas">
      <div ref={canvasContainer} className="canvas-container">
        <Stage className="canvas" width={size.width} height={size.height}>
          <Layer>
            <Image
              x={0 + offsetX}
              y={0 + offsetY}
              width={width}
              height={height}
              image={img}
            ></Image>
            {renderMarkerLine(10, "green")}
            {renderMarkers(10, "red", true)}
          </Layer>
        </Stage>
      </div>
      <div>
        <CanvasControl
          setCurrentImage={setCurrentImage}
          imagesLength={images.length}
          markerOperations={markerOperations}
        ></CanvasControl>
      </div>
    </div>
  );
};

export default Canvas;
