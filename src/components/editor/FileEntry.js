import "./FileEntry.css";
import { useState } from "react";
import MarkerEntry from "./MarkerEntry";

const FileEntry = ({ image, markers, index, markerOperations }) => {
  const [details, setDetails] = useState(false);

  return (
    <div className="file-entry">
      <div className="file-entry__bar">
        <p>{"[" + index + "] IMG: " + image.name}</p>
        <button onClick={() => setDetails((oldDetails) => !oldDetails)}>
          {details ? "Hide" : "Show"}
        </button>
        <button
          onClick={() =>
            markerOperations.addMarker(
              image.name,
              Math.floor(Math.random().toString() * 100),
              0,
              0
            )
          }
        >
          Add
        </button>
      </div>
      <div className="file-entry__details">
        {details &&
          (markers[image.name] ? (
            markers[image.name].map((marker, index) => (
              <MarkerEntry
                key={index}
                marker={marker}
                markerOperations={markerOperations}
                image={image}
              ></MarkerEntry>
            ))
          ) : (
            <div>No Markers</div>
          ))}
      </div>
    </div>
  );
};

export default FileEntry;
