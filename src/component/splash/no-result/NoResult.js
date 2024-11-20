import "./no-result.css";

function NoResult({
  header = "No Results Found", //default value
  content = "", //default value
}) {
  return (
    <div className="no__result">
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
}

export default NoResult;
