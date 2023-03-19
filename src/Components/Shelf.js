import React from "react";
import Book from "./Book";
import propTypes from 'prop-types'
export default function Shelf({ title, books, handleShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              bookFiltered={book}
              handleShelf={handleShelf}
              isSearch={false}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
Shelf.propTypes ={
  title : propTypes.string.isRequired ,
  books : propTypes.array.isRequired ,
  handleShelf : propTypes.func.isRequired ,
}