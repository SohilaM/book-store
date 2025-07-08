export class ShippingService {
  shipBook(book, quantity, address) {
    console.log(`Shipping ${quantity} ${book.title} to ${address} ...`);
    console.log(`Book shipped!🥳`);
  }
}
