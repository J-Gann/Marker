import { useEffect, useRef, useState } from "react";

import "./CanvasControl.css";

const CanvasControl = ({ onNextImageIndex, imagesLength }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [repeat, setRepeat] = useState(true);

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      if (imagesLength) {
        if (play && imagesLength - 1 > imageIndex) {
          setImageIndex((oldIndex) => oldIndex + 1);
        } else if (imagesLength - 1 === imageIndex && repeat) {
          setImageIndex(() => 0);
        }
      }
    }, 50);
    return () => window.clearInterval(intervalID);
  });

  useEffect(() => onNextImageIndex(imageIndex), [imageIndex]);

  return (
    <div className="canvas-control">
      <div className="current-image">
        Current Image: <b>{imageIndex}</b>
      </div>
      <div>
        <button
          onClick={() => {
            setPlay(false);
            setImageIndex((currentIndex) =>
              currentIndex !== 0 ? currentIndex - 1 : currentIndex
            );
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPlay(false);
            setImageIndex((currentIndex) =>
              currentIndex !== imagesLength + 1
                ? currentIndex + 1
                : currentIndex
            );
          }}
        >
          Next
        </button>

        <button onClick={() => setPlay(true)}>Play</button>
        <button onClick={() => setPlay(false)}>Pause</button>
        <button onClick={() => setRepeat((oldRepeat) => !oldRepeat)}>
          Toggle Repeat
        </button>
      </div>
    </div>
  );
};

export default CanvasControl;
