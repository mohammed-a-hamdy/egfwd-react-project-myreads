import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Shelf from "../Compnenets/Shelf";

function Content() {
  
  return (
    <div className="block  has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Shelf
              shelf={"currentlyReading"}
              shelfTitle={"Currently Reading Shelf"}
            ></Shelf>
          </div>
          <div className="column">
            <Shelf
              shelf={"wantToRead"}
              shelfTitle={"Want to Read Shelf"}
            ></Shelf>
          </div>
          <div className="column">
            <Shelf shelf={"read"} shelfTitle={"Read Already Shelf"}></Shelf>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
