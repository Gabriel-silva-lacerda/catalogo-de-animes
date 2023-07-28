import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import AnimeList from "../Components/AnimeList";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import BtnUp from "../Components/BtnUp";
import Head from "../Components/Head";

import "../styles/AnimeList/AnimeList.scss";

const Search = () => {
  const { api, error, loading, animeName, handleSearch } = useFetch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchData = async () => {
      await handleSearch(
        `${api}?filter[text]=${query}&page[limit]=20&page[offset]=0`
      );
    };
    fetchData();
  }, [query, api, handleSearch]);

  return (
    <section>
      <Head title="Seacrh" descripiton="anime search" />
      <div className="containerDescripiton">
        {error && <Error />}
        <div className="loadingContainer">
          {animeName && !animeName.length && !loading && (
            <h1>
              Not found <span>{query}</span>
            </h1>
          )}
          {animeName && animeName.length ? (
            <h1>
              Search for: <span>{query}</span>
            </h1>
          ) : (
            ""
          )}
          {loading && <Loading />}
        </div>
        <BtnUp />
        <ul className="containerList">
          <AnimeList anime={animeName} query={query} />
        </ul>
      </div>
    </section>
  );
};

export default Search;
