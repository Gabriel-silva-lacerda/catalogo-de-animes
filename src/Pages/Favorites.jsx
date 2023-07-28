import React, { useContext } from "react";
import FavoriteCarts from "../Components/FavoriteCarts";
import AppContext from "../context/AppContext";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import useFetch from "../Hooks/useFetch";
import Head from "../Components/Head";

import "../styles/Favorites/Favorites.scss";

const Favorites = () => {
  const { favoritesAnimes } = useContext(AppContext);
  const { error, loading } = useFetch();
  return (
    <section className="favoriteContainer">
      <Head title="Favorites" descripiton="anime favorites" />
      {favoritesAnimes.length ? (
        <h1 className="titleFavorite">
          <span className="detalis">Favorites</span> Animes{" "}
        </h1>
      ) : (
        <h1>
          Does not have <span className="detalis">Animes</span>
        </h1>
      )}
      {error && <Error />}
      <div className="loadingDescripition">{loading && <Loading />}</div>
      <ul className="favorites">
        {favoritesAnimes.map((cartItem) => (
          <FavoriteCarts key={cartItem.id} data={cartItem} />
        ))}
      </ul>
    </section>
  );
};

export default Favorites;
