import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const FavoriteCarts = ({ data }) => {
  const { toggleFavorites } = useContext(AppContext);
  const [animeHover, setAnimeHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setAnimeHover(true)}
      onMouseLeave={() => setAnimeHover(false)}
    >
      <img
        style={animeHover ? { filter: "blur(1px)" } : { filter: "initial" }}
        src={data.attributes.posterImage.small}
        alt={data.id}
      />
      <p>{data.attributes.canonicalTitle}</p>
      <button onClick={() => toggleFavorites(data)}>Remove</button>
      <Link to={`anime/${data.id}`}>Description</Link>
    </li>
  );
};

export default FavoriteCarts;
