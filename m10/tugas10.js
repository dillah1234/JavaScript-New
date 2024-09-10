function Person(name, age, hobby, job) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
  }
  
  let myFather = new Person("William", 30, "Play games", "Entrepreneur");
  let myMother = new Person("Jessica", 30, "Reading book", "Accountant");
  
  console.log(myFather.name);
  console.log(myMother.name);

// dirancang untuk melakukan tugas tertentu. Function dijalankan saat dipanggil. Function dapat memiliki nama dan dapat didefinisikan dengan atau tanpa parameter //

 // soal 1

  function registerUser(name, userType) {
    if (userType === "VIP") {
        return `Welcome to VIP , ${name}!`;
    } else {
        return `Welcome, ${name}!`;
    }
}

let welcomeMessage = registerUser("rapip", "VIP");
console.log(welcomeMessage);
function applyDiscount(userType, purchaseAmount) {
  let discount;
  
  if (userType === "VIP") {
      discount = 20;
  } else {
      discount = 10;
  }
  
  let discountAmount = (purchaseAmount * discount) / 100;
  let totalAmount = purchaseAmount - discountAmount;
  
  return totalAmount;
}

let totalAfterDiscountVIP = applyDiscount("VIP", 200);
console.log(totalAfterDiscountVIP);

let totalAfterDiscountNonVIP = applyDiscount("NON VIP", 100);
console.log(totalAfterDiscountNonVIP);

// soal 2


function calculatePrice(quantity, pricePerItem, isMember) {
    let totalPrice = quantity * pricePerItem;
    if (isMember == true) {
        totalPrice *= 0.85; 
    }
    return totalPrice;
}

const quantity = 3;
const pricePerItem = 150;
const isMember = true;

const finalPrice = calculatePrice(quantity, pricePerItem, isMember);
console.log("Final Price:", finalPrice);

function confirmPurchase(isConfirmed, totalPrice) {
    if (isConfirmed) {
        console.log(`Purchase confirmed with total price: ${totalPrice}`);
    } else {
        console.log("Purchase not confirmed");
    }
}

const isConfirmed = true;
confirmPurchase(isConfirmed, finalPrice);

// soal 3

function checkStock(item, requestedQuantity) {
    let stock = 50; 
    if (requestedQuantity > stock) {
        return `Stock insufficient for ${item}`;
    } else {
        return `Stock sufficient for ${item}`;
    }
}


const item = "Laptop";
const requestedQuantity = 60;
let checkStockMessage = checkStock(item, requestedQuantity);
console.log(checkStockMessage);


function restockItem(item, additionalStock) {
    let stock = 50; 
    stock += additionalStock; 

    if (stock >= requestedQuantity) {
        return `Restock complete for ${item}`;
    } else {
        return `Restock needed for ${item}`;
    }
}

const additionalStock = 20;
let restockMessage = restockItem(item, additionalStock);
console.log(restockMessage);

// soal 4

function calculateTax(price, location) {
    let taxRate;
    
    if (location === "depok") {
        taxRate = 0.10; 
    } else if (location === "Bandung") {
        taxRate = 0.05; 
    } else {
        taxRate = 0; 
    }

    const taxAmount = price * taxRate;
    const lastPrice = price + taxAmount;
    return lastPrice;
}

const price = 1000;
const location = "depok";

const lastPrice = calculateTax(price, location);
console.log("Final Price after tax:", finalPrice);

function displayResult(finalPrice, paymentStatus) {
    if (paymentStatus === "paid") {
        console.log(`Payment successful! Total amount: ${finalPrice}`);
    } else {
        console.log("Payment pending");
    }
}

const paymentStatus = "paid";
displayResult(finalPrice, paymentStatus);
