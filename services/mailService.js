export class MailService {
  sendBook(book, emailAddress) {
    console.log(`Sending ${book.title} to ${emailAddress} ...`);
    console.log(`Book sent!🥳`);
  }
}
