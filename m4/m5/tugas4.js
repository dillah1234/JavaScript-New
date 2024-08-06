for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}

let a = 0
do {
    console.log(a);
    a++
    
} while (a <= 10)

let person = {
    name: "John",
    age: 30
  };
  
  for (let key in person) {
    console.log(key, person[key]);
  }

// yg tadi latihan 

let num = 1

switch (num) {
    case 1:
        
    day = "monday"

    break;

    case 2:

    day = "tuesday"

    break;

    case 3:

    day = "wednesday"

    break;

    default:

    day = "unknown"

    break

}
console.log("today is " + day);

let number = 5;
switch (true) {
case (number < 0):
console.log("Negative");
break;
case (number === 0):
console.log("Zero");
break;
case (number > 0):
console.log("Positive");
break;
default:
console.log("Unknown");
}


