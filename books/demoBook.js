import { Book } from "./book";

export class DemoBook extends Book {
  constructor(ISBN, title, publishYear) {
    super(ISBN, title, publishYear);
  }
}
