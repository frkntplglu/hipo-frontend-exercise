import "./_photolist.scss";
import useFetch from "../../hooks/useFetch";
import Alert from "../alert/Alert";
import Loader from "../loader/Loader";
import NoResult from "../noresult/NoResult";
import Photo from "../photo/Photo";
import useQuery from "../../hooks/useQuery";

function PhotoList() {
  const getParams = useQuery();
  const query = getParams.get("query");
  const collections = getParams.get("collections");
  const { data, error, isLoaded } = useFetch(
    `/search/photos?page=1&query=${query}&collections=${collections}`
  );

  if (error !== null) {
    return <Alert type="error" message={error.message} />;
  }
  if (!isLoaded) {
    return <Loader />;
  }
  return data.total === 0 ? (
    <NoResult />
  ) : (
    <div className="photo-list">
      {data.results.map((photo) => (
        <Photo
          key={photo.id}
          id={photo.id}
          alt_description={photo.alt_description}
          urls={photo.urls}
        />
      ))}
    </div>
  );
}

export default PhotoList;
