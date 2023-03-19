import React from "react";
import Shelf from "./Shelf";
import propTypes from 'prop-types'
export default function Library({ booksApi, handleShelf }) {
  // filtering the books through the shelves with its shelf value.
  const currentlyReading =
    booksApi.filter((book) => book.shelf === "currentlyReading") 
  const wantToRead =booksApi.filter((book) => book.shelf === "wantToRead") 
  const read = booksApi.filter((book) => book.shelf === "read"); 
  return (
    <div className="list-books-content">
      <Shelf
        books={currentlyReading}
        title="Currently Reading"
        handleShelf={handleShelf}
      />
      <Shelf
        books={wantToRead}
        title="Want to Read"
        handleShelf={handleShelf}
      />
      <Shelf books={read} title="Read" handleShelf={handleShelf} />
    </div>
  );
}

Library.propTypes ={
  booksApi : propTypes.array.isRequired ,
  handleShelf : propTypes.func.isRequired ,
  
}