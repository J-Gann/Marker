import "./Editor.css";
import LoadFiles from "./LoadFiles";
import DisplayFiles from "./DisplayFiles";

const Editor = ({ handleNewImages, handleNewMarkers, images, markers, markerOperations }) => {
  return (
    <div className="editor">
      <div className="editor-load">
        <LoadFiles
          handleNewImages={handleNewImages}
          handleNewMarkers={handleNewMarkers}
          markers={markers}
        ></LoadFiles>
      </div>
      <div className="editor-display">
        <DisplayFiles images={images} markers={markers} markerOperations={markerOperations}></DisplayFiles>
      </div>
    </div>
  );
};

export default Editor;
