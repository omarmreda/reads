import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import propTypes from 'prop-types'

export default function Search({
  handleShelf,
  searchInput,
  searchResult,
  handleSearchChange,
}) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { ( searchResult?.length > 0 && searchInput.length > 0 ) && 
            searchResult.map((book) => (
              <Book
                key={book.id}
                bookFiltered={book}
                handleShelf={handleShelf}
                isSearch={true}
              />
            )) }
        </ol>
      </div>
    </div>
  );
}

Search.propTypes ={
  searchInput : propTypes.array.isRequired ,
  handleShelf : propTypes.func.isRequired ,
  searchResult :propTypes.array.isRequired,
  handleSearchChange : propTypes.func.isRequired ,
}