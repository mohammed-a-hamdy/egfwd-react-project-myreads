import React from "react";
import "bulma/css/bulma.min.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Search from "./Pages/Search";
import Notfound from "./Pages/Notfound";

function App() {
  const pages = [
    { link: "/", title: "Mainpage" },
    { link: "/search", title: "Search" },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main pages={pages} />}></Route>
        <Route exact path="/search" element={<Search pages={pages} />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
