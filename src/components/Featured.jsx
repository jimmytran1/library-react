import React from "react";
import Book from "./ui/Book";
import { books } from "../data.js";

export default function Featured() {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              // Filtering by book rating = 5
              .filter((book) => book.rating === 5)
              // Getting the first 4 books since 6 were given to us
              .slice(0, 4)
              // Make all book into book component
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
