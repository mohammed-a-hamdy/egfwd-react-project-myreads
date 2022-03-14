import React, { useState, useEffect, useContext } from "react";
import "bulma/css/bulma.min.css";
import { update, get } from "../BookAPI";


function Content(props) {
  /**
   * @description Change book shelf
   * @param {string} Shelf name
   */
  const [bookstate, setBookState] = useState("none");


  useEffect(() => {
    props.book.shelf
      ? setBookState(props.book.shelf)
      : get(props.book.id).then((res) => {
          setBookState(res.shelf);
        });

    return function clean() {
      setBookState("none");
    };
  }, []);
  /**
   * @description Change book shelf 
   * @param {string} Shelf name
   */
  const changeBookShelf = (shelf) => {
    const book = props.book;
    update(book, shelf)
      .then((res) => {
        setBookState(shelf);
      })
      .catch((e) => {});
  };
  return (
    <div className="card block">
      <div className="card-image">
        <img
          src={
            props.book.imageLinks
              ? props.book.imageLinks.smallThumbnail
              : process.env.PUBLIC_URL + "/icon.png"
          }
          width="200"
          height="200"
        ></img>
      </div>
      <div className="card-content">
        <h1 className="subtitle is-3">
          {props.book.title ? props.book.title : "No title"}
        </h1>

        {props.book.authors
          ? props.book.authors.map((author) => (
              <h2 key={author} className="subtitle is-5">
                {author}
              </h2>
            ))
          : "no authors"}
      </div>

      <div className="card-footer block">
        <div className="card-footer-item">
          <div className="buttons">
            <button
              className={`button ${
                bookstate === "currentlyReading" ? "is-success" : "is-light"
              }`}
              onClick={() => {
                changeBookShelf("currentlyReading");
              }}
            >
              Currently Reading
            </button>
            <button
              className={`button ${
                bookstate === "wantToRead" ? "is-success" : "is-light"
              }`}
              onClick={() => {
                changeBookShelf("wantToRead");
              }}
            >
              Want to Read
            </button>
            <button
              className={`button ${
                bookstate === "read" ? "is-success" : "is-light"
              }`}
              onClick={() => {
                changeBookShelf("read");
              }}
            >
              Read
            </button>
            <button
              className={`button ${
                bookstate === "none" ? "is-success" : "is-light"
              }`}
              onClick={() => {
                changeBookShelf("none");
              }}
            >
              None
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
