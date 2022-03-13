import React from "react";
import "bulma/css/bulma.min.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Search from "./Pages/Search";
import Notfound from "./Pages/Notfound";
import NavBar from "./Compnenets/Nav";

function App() {
  const pages = [
    { link: "/", title: "Mainpage" },
    { link: "/search", title: "Search" },
  ];
  return (
    <BrowserRouter>
      <NavBar pages={pages} />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
