import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Header/Header.scss";
import "../styles/Header/HeaderResponsive.scss";

const SearchInput = () => {
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text || text.length === 0) return navigate(`/notfound`);
    navigate(`/search?q=${text}`);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <header className="header">
      <nav className="searchContainer">
        <h1>
          <Link to="/">Animes</Link>
        </h1>
        <form className="containerInput" onSubmit={handleSubmit}>
          <input value={text} onChange={handleChange} />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <ul>
          <li>
            <Link to="/">
              <i className="fa-solid fa-house"></i>
              Home
            </Link>
          </li>
          <li>
            <Link to="favorites">
              <i className="fa-solid fa-heart"></i>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SearchInput;
