import React from "react";
import { Link } from "react-router-dom";

const AnimeList = ({ anime }) => {
  return (
    <>
      {anime &&
        anime.map((anime) => (
          <li key={anime.id}>
            <Link to={`anime/${anime.id}`}>
              <img src={anime.attributes.posterImage.small} alt={anime.id} />
              <p>{anime.attributes.canonicalTitle}</p>
            </Link>
          </li>
        ))}
    </>
  );
};

export default AnimeList;
