class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  printDetails() {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author);
    console.log("Price: " + this.price);
  }
}

const book1 = new Book("JavaScript Basics", "John Doe", 299);
book1.printDetails();
