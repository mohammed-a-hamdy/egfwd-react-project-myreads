import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";

function Content(props) {
  const [bookstate, setBookState] = useState("none");

  useEffect(() => {
    setBookState(props.book.shelf);
  }, []);
  return (
    <div className="block">
      <div className="card block">
        <div className="card-image">
          <img src={props.book.imageLinks.smallThumbnail}></img>
        </div>
        <div className="card-content">
          <h1 className="subtitle is-3">{props.book.title}</h1>
          {props.book.authors.map((author) => (
            <h2 key={author} className="subtitle is-5">
              {author}
            </h2>
          ))}
        </div>

        <div className="card-footer">
          <div className="buttons">
            <button
              e="button is-light"
              className={`button ${
                props.book.shelf === "currentlyReading"
                  ? "is-success"
                  : "is-light"
              }`}
            >
              Currently Reading
            </button>
            <button
              className={`button ${
                props.book.shelf === "wantToRead" ? "is-success" : "is-light"
              }`}
            >
              Want to Read
            </button>
            <button
              className={`button ${
                props.book.shelf === "read" ? "is-success" : "is-light"
              }`}
            >
              Read
            </button>
            <button className="button is-light">None</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
