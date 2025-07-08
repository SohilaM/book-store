import { Book } from "./book";

export class EBook extends Book {
  constructor(ISBN, title, publishYear, price, fileType) {
    super(ISBN, title, publishYear, price);
    this.fileType = fileType;
  }
}
