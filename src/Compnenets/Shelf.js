import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Book from "./Book";
import { getAll } from "../BookAPI";

function Content(props) {
  const [userBooks, setUserBooks] = React.useState([]);

  React.useEffect(() => {
    getAll().then((res) => {
      console.log(res);
      setUserBooks(res);
    }).catch((e)=>{
        setUserBooks([]);
    });
  }, []);
  return (
    <div className="block">
      <h1 className="title block">{props.shelfTitle}</h1>
      {userBooks
        .filter((book) => props.shelf === book.shelf)
        .map((book) => (
            <Book key={book.id}
            book={book}/>
        ))}
    </div>
  );
}

export default Content;
