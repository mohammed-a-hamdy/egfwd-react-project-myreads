import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Book from "./Book";
import { getAll, search } from "../BookAPI";

function Content(props) {
  const [books, setBooks] = React.useState([]);

  /**
   * @description Get books based on searchText
   * @param {string} props.search
   */
  React.useEffect(() => {
    if (!props.search) {
      getAll()
        .then((res) => {
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

    return function clean() {
      setBooks([]);
    };
  }, [props.search]);
  return (
    <div className="container">
      <h1 className="title block">{props.shelfTitle}</h1>
      <div className="columns is-multiline">
        {/**
         * @description Dual usage of Book compnenet, showing search results as long as homepage shelfs
         * @param {string} searchText
         */}
        {props.search
          ? books.map((book) => (
              <div key={book.id} className="column is-one-quarter">
                <Book book={book} />
              </div>
            ))
          : books
              .filter((book) => props.shelf === book.shelf)
              .map((book) => (
                <div key={book.id} className="column">
                  <Book book={book} />
                </div>
              ))}
      </div>
    </div>
  );
}

export default Content;
