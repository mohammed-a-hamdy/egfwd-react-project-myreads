import React from "react";
import "bulma/css/bulma.min.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Search from "./Pages/Search";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Main/>}></Route>
      <Route exact path="/search" element={<Search/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
