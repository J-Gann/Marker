import "./FileEntry.css";
import { useState } from "react";
import MarkerEntry from "./MarkerEntry";

const FileEntry = ({ image, markers, index }) => {
  const [details, setDetails] = useState(false);

  return (
    <div className="file-entry">
      <p>{"[" + index + "] IMG: " + image.name}</p>
      {markers[image.name] && (
        <button onClick={() => setDetails((oldDetails) => !oldDetails)}>
          {details ? "Hide Marker" : "Show Marker"}
        </button>
      )}

      {details &&
        markers[image.name] &&
        markers[image.name].map((marker, index) => (
          <MarkerEntry key={index} marker={marker}></MarkerEntry>
        ))}
    </div>
  );
};

export default FileEntry;
