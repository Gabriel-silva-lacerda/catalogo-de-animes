import React, { useCallback, useState } from "react";

const useFetch = () => {
  const api = "https://kitsu.io/api/edge/anime";

  const [animeName, setAnimeName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async (url) => {
    let date;
    let dateJson;
    try {
      setError(null);
      setLoading(true);
      date = await fetch(url);
      dateJson = await date.json();
    } catch (erro) {
      dateJson = null;
      setError("true");
    } finally {
      setLoading(false);
      setAnimeName(dateJson.data);
    }
  }, []);

  return {
    api,
    animeName,
    loading,
    error,
    setAnimeName,
    handleSearch,
  };
};

export default useFetch;
