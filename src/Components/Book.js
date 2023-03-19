import React from "react";
import propTypes from 'prop-types'
export default function Book({ bookFiltered, handleShelf, isSearch }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookFiltered.imageLinks?.smallThumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={
                bookFiltered.shelf
                  ? bookFiltered.shelf
                  : (bookFiltered.shelf = "none")
              }
              onChange={(event) =>
                handleShelf(bookFiltered, event.target.value, isSearch)
              }
            >
              <option value="moveTo" disabled>
                Move to...
              </option>
              <option value="currentlyReading"> Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="book-title">{bookFiltered.title}</div>
        <div className="book-authors">{bookFiltered.authors}</div>
      </div>
    </li>
  );
}

Book.propTypes = {
  bookFiltered : propTypes.array.isRequired,
  handleShelf : propTypes.func.isRequired,
  isSearch : propTypes.bool.isRequired
}
