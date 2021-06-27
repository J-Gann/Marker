import "./Editor.css";
import LoadFiles from "./LoadFiles";
import DisplayFiles from "./DisplayFiles";

const Editor = ({ handleNewImages, handleNewMarkers, images, markers }) => {
  return (
    <div className="editor">
      <div className="editor-load">
        <LoadFiles
          handleNewImages={handleNewImages}
          handleNewMarkers={handleNewMarkers}
        ></LoadFiles>
      </div>
      <div className="editor-display">
        <DisplayFiles images={images} markers={markers}></DisplayFiles>
      </div>
    </div>
  );
};

export default Editor;
