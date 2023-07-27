import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const Provider = ({ children }) => {
  const [favoritesAnimes, setFavoritesAnimes] = useState([]);

  useEffect(() => {
    const jsonFavorites = localStorage.getItem("favorites");
    if (jsonFavorites) {
      setFavoritesAnimes(JSON.parse(jsonFavorites));
    }
  }, []);

  const toggleFavorites = (anime) => {
    const isFavorite = favoritesAnimes.some((item) => item.id === anime.id);
    let newFavoritesAnimes = [...favoritesAnimes];
    if (!isFavorite) {
      newFavoritesAnimes.push(anime);
    } else {
      newFavoritesAnimes = favoritesAnimes.filter(
        (item) => item.id !== anime.id
      );
    }
    localStorage.setItem("favorites", JSON.stringify(newFavoritesAnimes));
    setFavoritesAnimes(newFavoritesAnimes);
  };

  const value = {
    favoritesAnimes,
    toggleFavorites,
  };
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Provider;
