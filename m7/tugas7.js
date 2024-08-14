const person = {
  name: "rapip",
  age: 16,
  address: {
    city: "depok",
    country: "indonesia",
  },
};
console.log(person.address, city);

obj.key = "car";
console.log(obj["key"]);
obj["key"] = "cars";
console.log(obj["key"]);

let obj = {
  name: "rapip",
  age: 16,
  address: {
    city: "depok",
    country: "indonesia",
  },
};
console.log(obj.address.city);

// soal nomer 1

let person = {
  name: "rapip",
  age: 16,
  city: "depok",
};
console.log(person); // dengan dot notation

console.log(person["name"]); // dengan bracket notation

person.age = 10 + 6;
console.log(person.age);

person["age"] = 10 + 6;
console.log(person["age"]);

delete person.city;
console.log(person.city);

// soal nomer 2

const { name, age } = person;
console.log(name);
console.log(age);

const person = {
  name: "rapip",
  age: 16,
  city: "depok",
};

const person = {
  name: "abdillah",
  age: 16,
};

const { name: userName, age: userAge } = person;

console.log(userName);
console.log(userAge);

// soal nomer 3

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getDetails() {
    return `Title: ${this.title}, Author: ${this.author}`;
  }
}

const myBook = new Book("JavaScript Essentials", "Jane Doe");

console.log(myBook.getDetails());

class animal {
  constructor(name, from, penulis) {
    this.name = name;
    this.from = from;
    this;
  }

  // Metode getDetails yang mengembalikan detail buku
  getDetails() {
    return `name: ${this.name}, from: ${this.from}`;
  }

  // Metode updateAnimal untuk mengubah nama hewan
  updateName(newName) {
    this.name = newName;
  }
}

const myanimal = new animal("lion king", "depok");

console.log(myanimal.getDetails()); // Output: Title: JavaScript Essentials, Author: Jane Doe

//   animal.updateanimal("titan");

console.log(myanimal.getDetails());
