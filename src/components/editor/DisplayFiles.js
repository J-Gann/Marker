import "./DisplayFiles.css";
import FileEntry from "./FileEntry";

const DisplayFiles = ({ images, markers }) => {
  console.log(images);
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
          ></FileEntry>
        ))}
      </div>
    </>
  );
};

export default DisplayFiles;
