import "./FileEntry.css";
import { useState } from "react";
import MarkerEntry from "./MarkerEntry";

const FileEntry = ({ image, markers, index, markerOperations }) => {
  const [details, setDetails] = useState(false);

  const renderFileEntryBar = () => {
    const title = "[" + index + "] IMG: " + image.name;
    const switchDetail = () => setDetails((oldDetails) => !oldDetails);
    const addMarker = () =>
      markerOperations.addMarker(
        image.name,
        0,
        0,
        Math.floor(Math.random().toString() * 100)
      );

    return (
      <div className="file-entry__bar">
        <p>{title}</p>
        <button onClick={switchDetail}>{details ? "Hide" : "Show"}</button>
        <button onClick={addMarker}>Add</button>
      </div>
    );
  };

  const renderFileEntryDetails = () => {
    if (!details) return <></>;
    const markerList = markerOperations.getMarkers(image.name);
    if (!markerList) return <div>No Markers</div>;
    return (
      <div className="file-entry__details">
        {Object.keys(markerOperations.getMarkers(image.name)).map((id) => {
          const marker = markerOperations.getMarker(image.name, id);
          return (
            <MarkerEntry
              key={index}
              markerId={id}
              marker={marker}
              markerOperations={markerOperations}
              image={image}
            ></MarkerEntry>
          );
        })}
      </div>
    );
  };

  return (
    <div className="file-entry">
      {renderFileEntryBar()}
      {renderFileEntryDetails()}
    </div>
  );
};

export default FileEntry;
