import React, { useState, useEffect, useContext } from "react";
import "bulma/css/bulma.min.css";
import Swal from "sweetalert2";
import { update, get } from "../BookAPI";

function Content(props) {
  /**
   * @description Change book shelf
   * @param {string} Shelf name
   */
  const [bookstate, setBookState] = useState("none");
  const { shelf, id, authors, title, imageLinks } = props.book;

  useEffect(() => {
    shelf
      ? setBookState(shelf)
      : get(id).then((res) => {
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
    Swal.showLoading();
    const book = props.book;
    update(book, shelf)
      .then((res) => {
        Swal.close();
        setBookState(shelf);
        book.shelf = shelf;
        props.Changeshelf(book);
      })
      .catch((e) => {});
  };
  return (
    <div className="card block">
      <div className="card-image">
        <img
          src={
            imageLinks
              ? imageLinks.smallThumbnail
              : process.env.PUBLIC_URL + "/icon.png"
          }
          width="200"
          height="200"
        ></img>
      </div>
      <div className="card-content">
        <h1 className="subtitle is-3">{title ? title : "No title"}</h1>

        {authors
          ? authors.map((author) => (
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
