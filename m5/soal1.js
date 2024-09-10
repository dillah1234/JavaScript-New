let hari = "jumat";

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
  case "Minggu":
    console.log("weekend");
    break;
  default:
    console.log("Hari yang dipilih tidak valid."); // buat cetak
}



for (let i = 1; i <= 35; i++) { // 
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz",i); // 15
  } else if (i % 5 == 0) {
    console.log("fizz"); // 3
  } else if (i % 5 == 0) {
    console.log("buzz"); // 5
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