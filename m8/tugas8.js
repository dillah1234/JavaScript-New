class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
   return `${this.Vehicle} Is Starting`
  }
}

class Car extends Vehicle  {
  constructor(brand,model) {
    super(brand);
    this.model = model;
   
  }
  start() {
    return `${this.brand} Is Starting`
  }
}

let Mobil = new Car ("supra")
console.log(Mobil.start());


// Soal Gambar 2

class Shape {
 
  draw() {
    return "Drawing  shape"
  }
}

class Rectangle extends Shape {
  draw() {
    return "Drawing Rectangle "
  }
}

let Gambar = new Rectangle  
console.log(Gambar.draw());

// Soal Gambar 3

class Person {
  constructor(name) {
    this.name = name
  }
  introduce(){
    return ` Hi, my name is ${this.name}`
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
 
  introduce() {
    return ` Hi, my name is ${this.name}, I am an ${this.position}`
  }
}

class Manager extends Employee{
  constructor(name, position) {
    super(name, position);
    
}
    introduce() {
   return ` Hi, my name is ${this.name}, I am an ${this.position}, and i manage a team `
     
    }
  }

  let nama = new Person ("rapip", "student")
  console.log(nama.introduce());

  let posisi = new Employee ("rapip", "student")
  console.log(posisi.introduce());  

  let pemilik = new Manager ("rapip", "student")
  console.log(pemilik.introduce());

  
// menurunkan/mewariskan properti dan method pada class lain. Istilah ini biasa disebut dengan inheritance //
// Method super() digunakan untuk memanggil constructor pada parent class //
// extends sama super itu inheritance //
// return ama value di samping itu polymorphism 
// kamu perlu membuat method pada child class dengan nama yang sama pada parent class tetapi isinya berbeda. Cara seperti ini disebut dengan overriding //
// return untuk mengembalikan nilai
// polymorphism mengubah value dalam methods // 


















































// class harimau {
//   constructor(nama) {
//     this.nama = nama;
//   }

//   makan() {
//     console.log("suara hewan");
//   }
// }

// class harimau extends Hewan {
//   constructor(nama) {
//     super(nama);
//   }

//   // Overriding
//   suara() {
//     console.log("miaaaw");
//   }
// }

// let kucing = new Kucing("TOM");
// kucing.suara(); // Output: miaaaw



























class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }
}

class Pelajar extends Orang {
  constructor(nama, umur, namaSekolah) {
   
    super(nama, umur);
    this.namaSekolah = namaSekolah;
  }

  
  belajar() {
    return `${this.nama} belajar di ${this.namaSekolah}`;
  }
}

let user = new Pelajar("rapip", 16, "abudzar");
console.log(user);
// yang di atas latihan skilvul