import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Book from "./Book";
import { getAll, searchAll } from "../BookAPI";

function Content(props) {
  const [books, setBooks] = React.useState([]);
  const { search, shelf, shelfTitle } = props;

  /**
   * @description Get books based on searchText
   * @param {string} search
   */
  React.useEffect(() => {
    if (search === "") {
      setBooks([]);
    } else {
      searchAll(search)
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

    return function clean() {
      setBooks([]);
    };
  }, [search, shelf]);
  return (
    <div className="container">
      <h1 className="title block">{shelfTitle}</h1>
      <div className="columns is-multiline">
        {/**
         * @description Dual usage of Book compnenet, showing search results as long as homepage shelfs
         * @param {string} searchText
         */}
        {search
          ? books.map((book) => (
              <div key={book.id} className="column is-one-quarter">
                <Book book={book} />
              </div>
            ))
          : books.map((book) => (
              <div key={book.id} className="column">
                <Book book={book} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default Content;
