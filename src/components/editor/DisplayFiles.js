import "./DisplayFiles.css";
import FileEntry from "./FileEntry";

const DisplayFiles = ({ images, markers, markerOperations }) => {
  return (
    <>
      <h3>Images</h3>
      <div className="display-files">
        {images.map((image, index) => (
          <FileEntry
            key={index}
            index={index}
            image={image}
            markers={markers}
            markerOperations={markerOperations}
          ></FileEntry>
        ))}
      </div>
    </>
  );
};

export default DisplayFiles;
