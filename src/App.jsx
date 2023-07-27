import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Description from "./Pages/Description";
import Search from "./Pages/Search";
import Favorites from "./Pages/Favorites";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import Provider from "./context/Provider";
// import BtnUp from "./Components/BtnUp";


const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="anime/:id" element={<Description />} />
          <Route path="search/anime/:id" element={<Description />} />
          <Route path="favorites/anime/:id" element={<Description />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
