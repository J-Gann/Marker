import "./MarkerEntry.css";

const MarkerEntry = ({ marker, markerId, image, markerOperations }) => {
  return (
    <div className="marker-entries">
      <div>
        <button
          className="fa-remove"
          onClick={() => {
            console.log("click");
            markerOperations.removeMarker(image.name, marker.id);
          }}
        >
          X
        </button>
      </div>
      <div>
        <p>id: </p>
        <input
          type="text"
          value={markerId}
          onChange={(e) => {
            markerOperations.setMarker(
              image.name,
              markerId,
              marker.x,
              marker.y,
              e.target.value
            );
          }}
        />
      </div>
      <div>
        <p>x: </p>
        <input
          type="text"
          value={marker.x}
          onChange={(e) => {
            markerOperations.setMarker(
              image.name,
              markerId,
              e.target.value,
              marker.y
            );
          }}
        />
      </div>
      <div>
        <p>y: </p>
        <input
          type="text"
          value={marker.y}
          onChange={(e) => {
            markerOperations.setMarker(
              image.name,
              markerId,
              marker.x,
              e.target.value
            );
          }}
        />
      </div>
    </div>
  );
};

export default MarkerEntry;
