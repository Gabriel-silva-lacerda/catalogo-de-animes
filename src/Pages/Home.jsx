import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import AnimesHome from "../Components/AnimesHome";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import BtnUp from "../Components/BtnUp";

import "../styles/AnimeList/AnimeList.scss";

const Home = () => {
  const { api, error, loading, animeName, handleSearch } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      await handleSearch(
        `${api}?page[limit]=20&page[offset]=0&filter[categories]=shounen`
      );
    };
    fetchData();
  }, [api, handleSearch]);

  return (
    <section>
      <div className="containerDescripiton">
        {error && <Error />}
        <div className="loadingContainer">{loading && <Loading />}</div>
        <BtnUp />
        <ul className="containerList">
          <AnimesHome animeName={animeName} />
        </ul>
      </div>
    </section>
  );
};

export default Home;
