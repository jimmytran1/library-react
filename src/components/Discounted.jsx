import React from "react";
import { books } from "../data";
import Book from "./ui/Book";

export default function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {
              // First filter the books by sale price, then we get first 8 books, then turn each element into Book component
              books
                .filter((book) => book.salePrice > 0)
                .slice(0, 8)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
