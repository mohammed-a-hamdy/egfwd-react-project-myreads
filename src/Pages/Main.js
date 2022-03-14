import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Shelf from "../Compnenets/Shelf";
import { getAll } from "../BookAPI";

function Content() {
  const [userbooks, setUserBooks] = React.useState([]);
  const [changedbook, setChangedBook] = React.useState([]);
  React.useEffect(() => {
    getAll()
      .then((res) => {
        setUserBooks(res);
      })
      .catch((e) => {
        setUserBooks([]);
      });
    return function clean() {
      setUserBooks([]);
    };
  }, [changedbook]);
  return (
    <div className="block  has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Shelf
              shelf={userbooks.filter(
                (book) => book.shelf === "currentlyReading"
              )}
              shelfTitle={"Currently Reading Shelf"}
              Changeshelf={(book) => setChangedBook(book)}
            ></Shelf>
          </div>
          <div className="column">
            <Shelf
              shelf={userbooks.filter((book) => book.shelf === "wantToRead")}
              shelfTitle={"Want to Read Shelf"}
              Changeshelf={(book) => setChangedBook(book)}
            ></Shelf>
          </div>
          <div className="column">
            <Shelf
              shelf={userbooks.filter((book) => book.shelf === "read")}
              shelfTitle={"Read Already Shelf"}
              Changeshelf={(book) => setChangedBook(book)}
            ></Shelf>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
