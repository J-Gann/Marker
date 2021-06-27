import Form from "react-bootstrap/Form";
import "./LoadFiles.css";

const LoadFiles = ({ handleNewImages, handleNewMarkers }) => {
  const readFileAsyncURL = (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const readFileAsyncText = (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const handleLoadImages = async (files) => {
    let awaitList = [];
    let nameList = [];
    for (var i = 0; i < files.length; i++) {
      awaitList.push(readFileAsyncURL(files[i]));
      nameList.push(files[i].name);
    }
    const urlList = await Promise.all(awaitList);
    awaitList = [];
    const imageList = [];
    for (var e = 0; e < urlList.length; e++) {
      let image = new Image();
      imageList.push(image);
      awaitList.push(
        new Promise((resolve, reject) => {
          image.onload = () => resolve();
        })
      );
      image.src = urlList[e];
    }
    await Promise.all(awaitList);
    imageList.forEach((image, index) => {
      imageList[index].name = nameList[index];
    });
    imageList.sort();
    handleNewImages(imageList);
  };

  const handleLoadMarkers = async (file) => {
    const markers = await readFileAsyncText(file[0]);
    handleNewMarkers(JSON.parse(markers));
  };

  return (
    <div>
      <h3>Files</h3>
      <div className="load-files">
        <label>Load Images</label>
        <input
          type="file"
          multiple
          accept="image/png, image/jpeg"
          onInput={(e) => handleLoadImages(e.target.files)}
        />
        <label>Load Marker</label>
        <input
          type="file"
          accept="json"
          onInput={(e) => handleLoadMarkers(e.target.files)}
        />
      </div>
    </div>
  );
};

export default LoadFiles;
