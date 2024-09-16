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


// soal 1

function printMessages() {
    
    console.log("Mulai");
    setTimeout(function() { 
        console.log("Selesai");
    }, 2000); k
}

printMessages();

// soal 2

function printEverySecond() {
    let count = 0;

    const intervalId = setInterval(function() {
        console.log("Hello, World!");

        count++;

        if (count >= 5) {
            clearInterval(intervalId);
        }
    }, 1000); 
}

printEverySecond();

// soal 3


function greet(name, callback) {
    
    console.log(`Hello, ${name}!`);
    
    setTimeout(function() {
        callback(); // 
    }, 1000); 
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Nama Anda", sayGoodbye);

// soal 4

function performTasks() {
    console.log("Tugas 1");

    setTimeout(function() {
        console.log("Tugas 2");

        setTimeout(function() {
            console.log("Tugas 3");
        }, 1000); 

    }, 3000); 
}

performTasks();

//  soal 5

function delayedMessage(message, delay) {
    setTimeout(function() {
        console.log(message);
    }, delay); 
}

delayedMessage("Hello after delay", 2000);
