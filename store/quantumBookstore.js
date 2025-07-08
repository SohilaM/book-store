import { DemoBook } from "../books/demoBook";
import { EBook } from "../books/EBook";
import { PaperBook } from "../books/paperBook";

import { MailService } from "../services/mailService";
import { ShippingService } from "../services/shippingService";

class QuantumBookstore {
  inventory = [];

  addDemoBook(ISBN, title, publishYear) {
    const book = new DemoBook(ISBN, title, publishYear);
    this.inventory.push(book);
  }
  addEBook(ISBN, title, publishYear, price, fileType) {
    const book = new EBook(ISBN, title, publishYear, price, fileType);
    this.inventory.push(book);
  }
  addPaperBook(ISBN, title, publishYear, price, stock) {
    const book = new PaperBook(ISBN, title, publishYear, price, stock);
    this.inventory.push(book);
  }

  removeOutdated(year) {
    const thisYear = new Date().getFullYear();
    const outdated = this.inventory.filter((book) => {
      return thisYear - book.publishYear >= year;
    });
    this.inventory = this.inventory.filter((book) => {
      return thisYear - book.publishYear < year;
    });
    return outdated;
  }

  buyEBook(ISBN, emailAddress) {
    const idx = this.inventory.findIndex((book) => book.ISBN === ISBN);
    const book = this.inventory[idx];
    if (book instanceof DemoBook) {
      console.log("Quantum book store: Error! Demo books are not for sale");
      return;
    }
    MailService.sendBook(book, emailAddress);
    return book.price;
  }

  buyPaperBook(ISBN, quantity, address) {
    const idx = this.inventory.findIndex((book) => book.ISBN === ISBN);
    const book = this.inventory[idx];

    if (book instanceof DemoBook) {
      console.log("Quantum book store: Error! Demo books are not for sale");
      return;
    }

    if (book.stock < quantity) {
      console.log("Error! no available quantity");
      return;
    }
    book.stock -= quantity;
    ShippingService.shipBook(book, quantity, address);
    return book.price * quantity;
  }
}

export const quantumBookstore = new QuantumBookstore();
