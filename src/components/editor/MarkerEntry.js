import "./MarkerEntry.css";

const MarkerEntry = ({ marker, image }) => {
  const keys = Object.keys(marker);
  return (
    <div className="marker-entries">
      {keys.map((key, index) => {
        if (key === "id") {
          return (
            <>
              <p>{key}: </p>
              <p key={index}> {marker[key]} </p>
            </>
          );
        }
        return (
          <>
            <label>{key}</label>
            <input key={index} type="text" value={marker[key]}></input>
          </>
        );
      })}
    </div>
  );
};

export default MarkerEntry;
