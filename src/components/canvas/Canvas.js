import { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Circle, Image } from "react-konva";

import "./Canvas.css";
import CanvasControl from "./CanvasControl";

const Canvas = ({ images, markers }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const canvasContainer = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Create hook only once on first render
  useEffect(() => {
    // Set initial size of canvas
    const { clientWidth, clientHeight } = canvasContainer.current;
    const newSize = { width: clientWidth, height: clientHeight };
    setSize(newSize);

    // Resize canvas to new size on every rezise event
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

  const onNextImageIndex = (index) => setCurrentImage(index);

  const renderImage = () => {
    if (images[currentImage]) {
      const img = images[currentImage];
      const scaleWidth = size.width / img.width;
      const scaleHeight = size.height / img.height;
      const scale = scaleWidth < scaleHeight ? scaleWidth : scaleHeight;
      const width = img.width * scale;
      const offsetX = (size.width - width) / 2;
      const height = img.height * scale;
      const offsetY = (size.height - height) / 2;

      return (
        <Image
          x={0 + offsetX}
          y={0 + offsetY}
          width={width}
          height={height}
          image={img}
        ></Image>
      );
    }
  };

  const renderMarkers = () => {
    if (images[currentImage]) {
      const img = images[currentImage];
      if (markers[img.name]) {
        const img = images[currentImage];
        const scaleWidth = size.width / img.width;
        const scaleHeight = size.height / img.height;
        const scale = scaleWidth < scaleHeight ? scaleWidth : scaleHeight;
        const width = img.width * scale;
        const offsetX = (size.width - width) / 2;
        const height = img.height * scale;
        const offsetY = (size.height - height) / 2;
        const currentMarkers = markers[img.name];
        return currentMarkers.map(({ x, y }) => {
          return (
            <Circle
              x={x * scale + offsetX}
              y={y * scale + offsetY}
              radius={10 * scale}
              fill="red"
            ></Circle>
          );
        });
      }
    }
  };

  return (
    <div className="canvas">
      <div ref={canvasContainer} className="canvas-container">
        <Stage className="canvas" width={size.width} height={size.height}>
          <Layer>
            {renderImage()}
            {renderMarkers()}
          </Layer>
        </Stage>
      </div>
      <div>
        <CanvasControl
          onNextImageIndex={onNextImageIndex}
          imagesLength={images.length}
        ></CanvasControl>
      </div>
    </div>
  );
};

export default Canvas;
