import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import NavBar from "../Compnenets/Nav";
import Shelf from "../Compnenets/Shelf";

function Content() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="block  has-background-light">
      <div className="container">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchTextChange}
        ></input>
        <div className="columns">
          <div className="column">
            <Shelf search={searchText} shelfTitle={"Search Result"}></Shelf>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
