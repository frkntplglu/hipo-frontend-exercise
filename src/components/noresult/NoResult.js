import "./_noresult.scss";
import noresult from "../../images/noresult.jpg";

function NoResult() {
  return (
    <div className="no-result">
      <img src={noresult} alt="No result found" />
      <h1>Sorry! No result found :(</h1>
      <h4>
        We're so sorry what you're looking for. Please try another keyword.
      </h4>
    </div>
  );
}

export default NoResult;
