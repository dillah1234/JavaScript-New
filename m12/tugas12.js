// function mandi() {
//     console.log("Mandi");
// }

// function sarapan() {
//     setTimeout(function() {
//         console.log("Sarapan tertunda 3 detik");
//     }, 3000);
// }

// function berangkatSekolah() {
//     console.log("Berangkat Sekolah");
// }

// function sarapan(callback) {
//     setTimeout(function() {
//         console.log("Sarapan tertunda 3 detik");
//         callback();  // Memanggil callback setelah sarapan selesai
//     }, 3000);
// }

// mandi();  // Panggil function mandi
// sarapan(function() {  // Panggil function sarapan dengan callback berangkatSekolah
//     berangkatSekolah();
// });package



//soal 1 

function printMessages() {
    console.log("mulai");
    setTimeout(() => console.log("selesai"), 1000);
  }
  
  printMessages();
  

  //soal 2 

function printEverySecond() {
    let counter = 0;
    let interval = setInterval(() => {
      console.log("Hello World");
      counter++;
      if (counter === 5) {
        clearInterval(interval);
      }
    }, 1000);
  }
  
  printEverySecond();
  

  //soal 3 

function greet(name, callback) {
    console.log(`Hello ${name}`);
    setTimeout(callback, 1000);
}

function sayGoodbye() {
    console.log("Goodbye");
}

greet("yewon", sayGoodbye)


//soal 4 

function performTasks() {
    console.log("tugas 1");
    setTimeout(() => {
      console.log("tugas 2");
      setTimeout(() => {
        console.log("tugas 3");
      }, 1000);
    }, 3000);
  }
  
  performTasks();
  

  //soal 5 
function delayedMessage(message, delay) {
    setTimeout(() => console.log(message), delay);
  }

  console.log(delayedMessage("Hello after delay", 2000));

