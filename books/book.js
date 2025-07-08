export class Book {
  constructor(ISBN, title, publishYear, price = 0) {
    this.ISBN = ISBN;
    this.title = title;
    this.publishYear = publishYear;
    this.price = price;
  }
}
