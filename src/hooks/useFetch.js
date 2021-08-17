import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../apiConfig";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoaded(false);
        const response = await fetch(BASE_URL + url, {
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        });
        const data = await response.json();
        setData(data);
        setIsLoaded(true);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { error, isLoaded, data };
};

export default useFetch;
