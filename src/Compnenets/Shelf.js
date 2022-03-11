import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Book from "./Book";
import { getAll, search } from "../BookAPI";

function Content(props) {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    if (!props.search) {
      getAll()
        .then((res) => {
          console.log(res);
          setBooks(res);
        })
        .catch((e) => {
          setBooks([]);
        });
    } else {
      if (props.search === "") {
        setBooks([]);
      } else {
        search(props.search)
          .then((res) => {
            console.log(res);
            if (Array.isArray(res)) {
              setBooks(res);
            } else {
              setBooks([]);
            }
          })
          .catch((e) => {
            setBooks([]);
          });
      }
    }
  }, [props.search]);
  return (
    <div className="block">
      <h1 className="title block">{props.shelfTitle}</h1>
      <div className="columns is-multiline">
        {props.search
          ? books.map((book) => (
              <div className="column">
                <Book key={book.id} book={book} />
              </div>
            ))
          : books
              .filter((book) => props.shelf === book.shelf)
              .map((book) => 
              
              <div className="column">
              <Book key={book.id} book={book} />
            </div>
              )}
      </div>
    </div>
  );
}

export default Content;
