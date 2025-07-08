import { Book } from "./book.js";

export class DemoBook extends Book {
  constructor(ISBN, title, publishYear) {
    super(ISBN, title, publishYear);
  }
}
