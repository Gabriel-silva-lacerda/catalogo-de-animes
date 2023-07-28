import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import AnimeDescripition from "../Components/AnimeDescripition";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Head from "../Components/Head";

import "../styles/AnimeList/AnimeList.scss";
import "../styles/Descripition/Descripition.scss";
import "../styles/Descripition/DescripitionResponsive.scss";


const Description = () => {
  const { loading, api, animeName, error, handleSearch } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await handleSearch(`${api}/${id}`);
    };
    fetchData();
  }, [api, id, handleSearch]);

  return (
    <section className="descripitionContainer " id="animeLeft">
      <Head title="Description" descripiton="anime description" />
      {error && <Error />}
      <div className="loadingDescripition">{loading && <Loading />}</div>
      {animeName && <AnimeDescripition animeId={animeName} />}
    </section>
  );
};

export default Description;
