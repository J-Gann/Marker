import "./MarkerEntry.css";

const MarkerEntry = ({ marker, image }) => {
  const keys = Object.keys(marker);
  return (
    <div className="marker-entries">
      {keys.map((key, index) => {
        return <p>{key.toString() + ":" + marker[key].toString() + " "}</p>;
      })}
    </div>
  );
};

export default MarkerEntry;
