import "./MarkerEntry.css";

const MarkerEntry = ({ marker, image, markerOperations }) => {
  return (
    <div className="marker-entries">
      <div>
        <p>id: </p>
        <input
          type="text"
          value={marker.id}
          onChange={(e) => {
            markerOperations.setMarker(
              image.name,
              marker.id,
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
              marker.id,
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
              marker.id,
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
