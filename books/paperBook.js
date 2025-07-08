import { Book } from "./book";

export class PaperBook extends Book {
  constructor(ISBN, title, publishYear, price, stock) {
    super(ISBN, title, publishYear, price);
    this.stock = stock;
  }
}
