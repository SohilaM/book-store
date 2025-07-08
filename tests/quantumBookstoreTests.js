import { QuantumBookstore } from "../store/quantumBookstore.js";
const quantumBookstore = new QuantumBookstore();

class tests {
  runTests() {
    quantumBookstore.addEBook("1", "Book 1", 2024, 10, "pdf");
    quantumBookstore.addPaperBook("2", "Book 2", 2021, 100, 5);
    const price1 = quantumBookstore.buyPaperBook("2", 7, "Mansoura");
    if (price1) console.log(`Price is ${price1}`);
    const price2 = quantumBookstore.buyEBook("1", "test@test.com");
    if (price2);
    console.log(`Price is ${price2}`);
    const price3 = quantumBookstore.buyPaperBook("2", 1, "Mansoura");
    if (price3) console.log(`Price is ${price3}`);

    const outdated = quantumBookstore.removeOutdated(3);
    if (outdated.length !== 0) {
      console.log(`removed books: ${outdated}`);
    }
  }
}

export const test = new tests();
