import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(true);
      }
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { isLoading, isError, blogs, setBlogs };
};

export default useFetch;
