import { DemoBook } from "../books/demoBook.js";
import { EBook } from "../books/EBook.js";
import { PaperBook } from "../books/paperBook.js";

import { mailService } from "../services/mailService.js";
import { shippingService } from "../services/shippingService.js";

export class QuantumBookstore {
  inventory = [];

  addDemoBook(ISBN, title, publishYear) {
    const book = new DemoBook(ISBN, title, publishYear);
    this.inventory.push(book);
    console.log("Added a new Demo Book");
  }
  addEBook(ISBN, title, publishYear, price, fileType) {
    const book = new EBook(ISBN, title, publishYear, price, fileType);
    this.inventory.push(book);
    console.log("Added a new E Book");
  }
  addPaperBook(ISBN, title, publishYear, price, stock) {
    const book = new PaperBook(ISBN, title, publishYear, price, stock);
    this.inventory.push(book);
    console.log("Added a new Paper Book");
  }

  removeOutdated(year) {
    const thisYear = new Date().getFullYear();
    const outdated = this.inventory.filter((book) => {
      return thisYear - book.publishYear >= year;
    });
    this.inventory = this.inventory.filter((book) => {
      return thisYear - book.publishYear < year;
    });
    console.log(`${outdated.length} Books removed`);
    return outdated.map((book) => book.title);
  }

  buyEBook(ISBN, emailAddress) {
    const idx = this.inventory.findIndex((book) => book.ISBN === ISBN);
    const book = this.inventory[idx];

    if (idx === -1) {
      console.log(`Error! Book not Found`);
      return;
    }

    if (book instanceof DemoBook) {
      console.log("Quantum book store: Error! Demo books are not for sale");
      return;
    }
    mailService.sendBook(book, emailAddress);
    return book.price;
  }

  buyPaperBook(ISBN, quantity, address) {
    const idx = this.inventory.findIndex((book) => book.ISBN === ISBN);
    const book = this.inventory[idx];

    if (idx === -1) {
      console.log(`Error! Book not Found`);
      return;
    }

    if (book instanceof DemoBook) {
      console.log("Error! Demo books are not for sale");
      return;
    }

    if (book.stock < quantity) {
      console.log("Error! no available quantity");
      return;
    }
    book.stock -= quantity;
    shippingService.shipBook(book, quantity, address);
    return book.price * quantity;
  }
}

export const quantumBookstore = new QuantumBookstore();
