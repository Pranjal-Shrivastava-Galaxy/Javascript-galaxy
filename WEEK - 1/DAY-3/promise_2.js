// Promise is a promise of code execution. The code either executes or fails, in both the cases subscriber will be notified.

//SYNTAX

// let promise = new Promise(function(resolve, reject){
//     alert("Hello")
//     resolve(56)
// });

// console.log("Hello one")

// setTimeout(function(){
//     console.log("Hello in 2 seconds")}, 2000)

// console.log("My name is Pranjal - three") //It will run as 1,3,2

let order = new Promise((resolve, reject) => {
  let foodReady = true;

  if (foodReady) {
    resolve("Food delivered!");
  } else {
    reject("Delivery failed.");
  }
});
//Promises are used to handle asynchronous operations in JavaScript, allowing you to write cleaner and more manageable code when dealing with operations that take time, such as API calls or file reading.

order
  .then(result => console.log(result)) 
  
  // if resolved = .then() is used to handle success (when resolve() is called). It receives the message from resolve() and logs it.

  .catch(error => console.log(error)); 
  
  // if rejected = .catch() is used to handle errors (when reject() is called). It receives the message from reject() and logs it.


//Promise is used to Fetching data from an API, Delays (setTimeout, etc.), Waiting for user input, Reading files