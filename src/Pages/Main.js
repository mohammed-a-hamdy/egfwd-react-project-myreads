import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Shelf from "../Compnenets/Shelf";
import { getAll } from "../BookAPI";

function Content() {
  const [changedbook, setChangedBook] = React.useState([]);
  const [current,setCurrent] = React.useState([]);
  const [want,setWant] = React.useState([]);
  const [already,setAlready] = React.useState([]);
  React.useEffect(() => {
    getAll()
      .then((res) => {
        setCurrent(res.filter(
          (book) => book.shelf === "currentlyReading"
        ));
        setWant(res.filter(
          (book) => book.shelf === "wantToRead"
        ));
        setAlready(res.filter(
          (book) => book.shelf === "read"
        ));
      })
      .catch((e) => {
        setCurrent([]);
        setWant([]);
        setAlready([]);
      });
    return function clean() {
      setCurrent([]);
      setWant([]);
      setAlready([]);
    };
  }, [changedbook]);

  
  return (
    <div className="block  has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Shelf
              shelf={current}
              shelfTitle={"Currently Reading Shelf"}
              Changeshelf={(book) => setChangedBook(book)}
            ></Shelf>
          </div>
          <div className="column">
            <Shelf
              shelf={want}
              shelfTitle={"Want to Read Shelf"}
              Changeshelf={(book) => setChangedBook(book)}
            ></Shelf>
          </div>
          <div className="column">
            <Shelf
              shelf={already}
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
