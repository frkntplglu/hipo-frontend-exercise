import "./_search.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

function Search(props) {
  const { alignment } = props;
  const [queryState, setQueryState] = useState("");
  const [collectionState, setCollectionState] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?query=${queryState}&collection=${collectionState}`);
  };

  return (
    <div className={`search ${alignment}`}>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          id="query"
          placeholder="Query"
          className="text-input"
          value={queryState}
          aria-label="Query"
          onChange={(e) => setQueryState(e.target.value)}
        />
        <div className="select-wrapper">
          <select
            className="text-input"
            id="collections"
            value={collectionState}
            onChange={(e) => setCollectionState(e.target.value)}
            placeholder="Collections"
            aria-label="Collections"
          >
            <option value="">Collections</option>
            <option value="208403">Love</option>
            <option value="3403106">Summer</option>
            <option value="1424240">Animal</option>
            <option value="1597792">Women</option>
          </select>
        </div>
        <button type="submit" className="primary-btn">
          SEARCH
        </button>
      </form>
    </div>
  );
}

Search.propTypes = {
  alignment: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default Search;
