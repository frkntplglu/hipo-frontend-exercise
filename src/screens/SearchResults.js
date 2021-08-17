import Header from "../components/header/Header";
import PhotoList from "../components/photolist/PhotoList";

function SearchResults() {
  return (
    <>
      <Header />
      <div className="container">
        <PhotoList />
      </div>
    </>
  );
}

export default SearchResults;
