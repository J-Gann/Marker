import "./DisplayFiles.css";
import FileEntry from "./FileEntry";

const DisplayFiles = ({ images, markers, markerOperations }) => {
  return (
    <>
      <h3>Images</h3>
      <div className="display-files">
        {images.map((image, index) => (
          <FileEntry
            key={`FileEntry_image_${image}`}
            index={index}
            image={image}
            markers={markers[image.name]}
            markerOperations={markerOperations}
          ></FileEntry>
        ))}
      </div>
    </>
  );
};

export default DisplayFiles;
