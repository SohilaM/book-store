export class ShippingService {
  shipBook(book, address) {
    console.log(`Shipping ${book.title} to ${address} ...`);
    console.log(`Book shipped!🥳`);
  }
}
