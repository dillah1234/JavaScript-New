function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  async function messages() {
    const msg = await helloWorld();
    console.log(msg);
  }
  
  messages();

// async //

function ambilDataUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  ambilDataUser();

//  fetch //


// soal 1

function simulateDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay Finished");
    }, 2000);
  });
}
async function result() {
  let rst = await simulateDelay();
  console.log(rst);
}
console.log(result());

//soal 2 start
async function calculateDivision(a, b){
  let div = a / b;
  if (b == 0 || a == 0){
    throw new Error("error");{
    }
  }
}

//   soal 3

function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 1 selesai setelah 1 detik");
      }, 1000); 
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 2 selesai setelah 2 detik");
      }, 2000); 
    });
  }
  
  async function performTasks() {
    const result1 = await task1();
    const result2 = await task2();+
  
    console.log(result1);
    console.log(result2);
  }
  
  performTasks();

  // async, mengubah function synchronous menjadi asynchronous //
  // await, menunda eksekusi hingga proses asynchronous selesai //

  





