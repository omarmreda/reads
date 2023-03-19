import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksData from "./BooksAPI";
import Search from "./Components/Search";
import MainPage from "./Components/MainPage";

function App() {
  const [books, setBooks] = useState(() => []);
  // Getting default books for home page from API and updating the UI with these books.
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksData.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);
  const [searchInput, setSearchInput] = useState(() => "");
  const [searchResult, setSearchResult] = useState(() => []);
  // Haandling the change of search input.
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  // updating the search with the search input enteries.
  useEffect(() => {
    if (searchInput) {
      const searchApi = async () => {
        try {
          const searchRes = await BooksData.search(searchInput);
          // updating book shelves that is already exist on the home page with its shelf.
          const mergedBooks = searchRes.map((searchBook) => {
            const bookFound = books.find(
              (mainBook) => mainBook.id === searchBook.id
            );
            if (bookFound) {
              return bookFound;
            } else {
              return searchBook;
            }
          });

          setSearchResult(mergedBooks);
        } catch (err) {
          console.log(`Book not found`);
        }
      };
      searchApi();
    }
  }, [searchInput]);

  // handling the change of the shelf through search page and home page.
  const handleShelf = (book, newShelf, isSearch) => {
    // condition to loop on the current array(search array || home page array).
    let bookList = isSearch ? searchResult : books;

    const filteredBook = bookList.find(
      (currentBook) => currentBook.id === book.id
    );
    filteredBook.shelf = newShelf;
    const bookIndex = books.findIndex(
      (oldBook) => oldBook.id === filteredBook.id
    );

    // checking if the book exist or not.
    if (bookIndex !== -1) {
      let book = { ...books[bookIndex] };
      book.shelf = newShelf;
      setBooks([...books]);
    } else {
      setBooks([...books, filteredBook]);
    }

    BooksData.update(book, newShelf);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <MainPage
            books={books}
            handleShelf={handleShelf}
            searchResult={searchResult}
          />
        }
      />
      <Route
        path="/search"
        element={
          <Search
            handleShelf={handleShelf}
            searchInput={searchInput}
            searchResult={searchResult}
            handleSearchChange={handleSearchChange}
          />
        }
      />
    </Routes>
  );
}

export default App;
