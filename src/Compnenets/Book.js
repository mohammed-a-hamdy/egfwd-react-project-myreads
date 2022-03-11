import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";

function Content(props) {
  return (
    <div className="block">
      <div className="card block">
        <div className="card-image">
          <img src={props.thumb}></img>
        </div>
        <div className="card-content">
          <h1 className="subtitle is-3">{props.title}</h1>
          {props.authors.map((author) => (
            <h2 key={author} className="subtitle is-5">
              {author}
            </h2>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Content;
