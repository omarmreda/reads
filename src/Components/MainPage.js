import React from "react";
import Library from "./Library";
import MainHeader from "./MainHeader";
import OpenSearch from "./OpenSearch";
import propTypes from 'prop-types'

export default function MainPage({ books, handleShelf, searchResult }) {
  return (
    <div>
      <MainHeader />
      <Library
        booksApi={books}
        handleShelf={handleShelf}
        searchResult={searchResult}
      />
      <OpenSearch books={books} />
    </div>
  );
}

MainPage.propTypes ={
  books : propTypes.array.isRequired ,
  handleShelf : propTypes.func.isRequired ,
  searchResult :propTypes.array.isRequired,
}