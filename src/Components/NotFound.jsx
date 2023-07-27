import React from "react";
import { Link } from "react-router-dom";

import "../styles/NotFound/NotFound.scss";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="notFoundContainer">
        <h1>Page not found :( </h1>
        <h2>Suggestions: </h2>
        <ul>
          <li>Make sure the search is correct.</li>
          <li>Try searching for something else.</li>
          <li>
            Return to{" "}
            <Link className="home" to="/" end>
              home page
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NotFound;
