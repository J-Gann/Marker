import { useEffect, useState } from "react";

import "./CanvasControl.css";

const CanvasControl = ({ setCurrentImage, imagesLength }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [play, setPlay] = useState(false);
  const [repeat, setRepeat] = useState(true);
  const [speed, setSpeed] = useState(40);

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      if (imagesLength) {
        if (play && imagesLength > imageIndex) {
          setImageIndex((oldIndex) => oldIndex + 1);
        } else if (imagesLength === imageIndex && repeat) {
          setImageIndex(() => 0);
        }
      }
    }, speed);
    return () => window.clearInterval(intervalID);
  });

  useEffect(() => setCurrentImage(imageIndex), [imageIndex, setCurrentImage]);

  return (
    <div className="canvas-control">
      <div className="current-image">
        Image:
        <input
          type="number"
          value={imageIndex}
          onInput={(e) => {
            const number = Number.parseInt(e.target.value);
            if (number >= 0 && number <= imagesLength - 1)
              setImageIndex(number);
          }}
        />
      </div>
      <div className="current-speed">
        Delay:
        <input
          type="number"
          value={speed}
          onInput={(e) => {
            const number = Number.parseInt(e.target.value);
            if (number >= 1) setSpeed(number);
          }}
        />
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
