import { Book } from "./book.js";

export class PaperBook extends Book {
  constructor(ISBN, title, publishYear, price, stock) {
    super(ISBN, title, publishYear, price);
    this.stock = stock;
  }
  add(ISBN, title, publishYear, price) {}
}
