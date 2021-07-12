import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Circle, Image, Line } from "react-konva";

import "./Canvas.css";
import CanvasControl from "./CanvasControl";

const Canvas = ({ images, markers, markerOperations }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const canvasContainer = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const img = images[currentImage];

  useEffect(() => {
    const { clientWidth, clientHeight } = canvasContainer.current;
    const newSize = { width: clientWidth, height: clientHeight };
    setSize(newSize);

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

  const scaleWidth = size.width / img.width;
  const scaleHeight = size.height / img.height;
  const scale = scaleWidth < scaleHeight ? scaleWidth : scaleHeight;
  const width = img.width * scale;
  const offsetX = (size.width - width) / 2;
  const height = img.height * scale;
  const offsetY = (size.height - height) / 2;

  const renderMarkers = () => {
    const currentMarkers = markerOperations.getMarkers(img.name);
    return currentMarkers.map(({ id, x, y }) => {
      return (
        <Circle
          key={`marker_${currentImage}_${id}`}
          x={x * scale + offsetX}
          y={y * scale + offsetY}
          radius={10 * scale}
          fill={"red"}
          stroke={"black"}
          draggable={true}
          tension={0.5}
          onDragEnd={(e) =>
            markerOperations.setMarker(
              img.name,
              id,
              e.target.x() / scale - offsetX / scale,
              e.target.y() / scale - offsetY / scale
            )
          }
        ></Circle>
      );
    });
  };

  const renderMarkerLine = (size) => {
    const currentMarkers = markerOperations.getMarkers(img.name);
    return currentMarkers.map(({ id }) => {
      let points1 = [];
      for (let cnt = currentImage - size; cnt <= currentImage; cnt++) {
        const img = images[cnt];
        const currentMarkers = markerOperations.getMarkers(img && img.name);
        const currentMarker = currentMarkers.filter(
          (marker) => marker.id === id
        )[0];
        if (currentMarker) {
          points1.push(currentMarker["x"] * scale + offsetX);
          points1.push(currentMarker["y"] * scale + offsetY);
        }
      }
      let points2 = [];
      for (let cnt = currentImage; cnt < currentImage + size + 1; cnt++) {
        const img = images[cnt];
        const currentMarkers = markerOperations.getMarkers(img && img.name);
        const currentMarker = currentMarkers.filter(
          (marker) => marker.id === id
        )[0];
        if (currentMarker) {
          points2.push(currentMarker["x"] * scale + offsetX);
          points2.push(currentMarker["y"] * scale + offsetY);
        }
      }
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
            {renderMarkers(10, "red", true)}
            {renderMarkerLine(10, "green")}
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
