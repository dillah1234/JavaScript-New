const person = {
  name: "rapip",
  age: 17,
  address: {
    city: "depok",
    country: "indonesia",
  },

};
console.log(person.address );
console.log(person.address.country);




let obj = {
  name: "rapip",
  age: 16,
  address: {
    city: "depok",
    country: "indonesia",
  },
};

obj.key = "cars";
console.log(obj["key"]);
obj["key"] = "cars";
console.log(obj["key"]);
console.log(obj.address.city);

// soal nomer 1

let bros = {
  name: "rapip",
  age: 16,
  city: "depok",
};
console.log(person); // dengan dot notation

console.log(person["name"]); // dengan bracket notation

person.age = 16 + 5;
console.log(person.age);

person["age"] = 16 + 5;
console.log(person["age"]);

delete person.city;
console.log(person.city);

// soal nomer 2

const { name, age } = person;
console.log(name);
console.log(age);

const cool = {
  name: "rapip",
  age: 16,
  city: "depok",
};

const behav = {
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
    this.asd = author;
  }

  getDetails() {
    return `Title: ${this.title}, Author: ${this.asd}`;
  }
}

const myBook = new Book("JavaScript Essentials", "abdillah");

console.log(myBook.getDetails());

class animal {
  constructor(name, from) {
    this.name = name;
    this.from = from;
    
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

console.log(myanimal.getDetails());

//   animal.updateanimal("titan");

console.log(myanimal.getDetails());
