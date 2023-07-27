import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Anime = ({ animeId }) => {
  const { toggleFavorites, favoritesAnimes } = useContext(AppContext);

  return (
    <div className="descripitionAnime">
      <img src={animeId.attributes.posterImage.small} alt={animeId.id} />
      <div>
        <h1>{animeId.attributes.canonicalTitle}</h1>
        <ul>
          <li>Episodes: {animeId.attributes.episodeCount}</li>
          <li>Average Rating: {animeId.attributes.averageRating}</li>
          <li>Release Date: {animeId.attributes.startDate}</li>
          <li>{animeId.attributes.synopsis}</li>
        </ul>
        <div className="btnContainerFavorites">
          <button className="addFavorites" onClick={() => toggleFavorites(animeId)}>
            Add to Favorites
            {favoritesAnimes.some((itemCart) => itemCart.id === animeId.id) ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anime;
