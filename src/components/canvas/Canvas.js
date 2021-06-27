import { useEffect, useRef, useState } from "react";

import "./Canvas.css";
import CanvasControl from "./CanvasControl";

const Canvas = ({ images, markers }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const canvasContainer = useRef(null);
  const canvasRef = useRef(null);
  let imageIndex = 0;

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, size.width, size.height);
      if (images.length > 0) {
        const img = images[imageIndex];
        const scaleWidth = size.width / img.width;
        const scaleHeight = size.height / img.height;
        const scale = scaleWidth < scaleHeight ? scaleWidth : scaleHeight;
        const width = img.width * scale;
        const offsetX = (size.width - width) / 2;
        const height = img.height * scale;
        const offsetY = (size.height - height) / 2;

        ctx.drawImage(img, 0 + offsetX, 0 + offsetY, width, height);

        if (markers[img.name]) {
          markers[img.name].forEach(({ x, y }) => {
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(
              x * scale + offsetX,
              y * scale + offsetY,
              6,
              0,
              2 * Math.PI
            );
            ctx.fill();
          });
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  });

  const onNextImageIndex = (index) => (imageIndex = index);

  return (
    <div className="canvas">
      <div ref={canvasContainer} className="canvas-container">
        <canvas
          className="canvas"
          ref={canvasRef}
          width={size.width}
          height={size.height}
        ></canvas>
      </div>
      <div className="canvas-control">
        <CanvasControl
          onNextImageIndex={onNextImageIndex}
          imagesLength={images && images.length}
        ></CanvasControl>
      </div>
    </div>
  );
};

export default Canvas;
