let hari = "Rabu";

switch (hari) {
  case "Senin":
    console.log("weekday");
    break;
  case "Selasa":
    console.log("weekday");
    break;
  case "Rabu":
    console.log("weekday");
    break;
  case "Kamis":
    console.log("weekday");
    break;
  case "Jumat":
    console.log("weekday");
    break;
  case "Sabtu":
    console.log("weekend");
    break;
  case "Minggu":ro0
    console.log("weekend");
    break;
  default:
    console.log("Hari yang dipilih tidak valid.");
}



for (let i = 1; i <= 15; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}



for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}




for (i = 1; i <= 15; i++) {
  if (i % 3 == 0) {
    console.log("multiple of 3");
  }
  
}