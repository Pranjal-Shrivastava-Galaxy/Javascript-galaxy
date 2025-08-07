/*
In JavaScript, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a more structured and readable way to handle asynchronous code compared to traditional callback functions, preventing "callback hell." 


States of a Promise:
Pending: The initial state; the asynchronous operation is still in progress.
Fulfilled (Resolved): The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure (an error object).


Creating a Promise:
A Promise is created using the Promise constructor, which takes an "executor" function as an argument. This executor function itself takes two arguments: resolve and reject.
 */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise
  .then(result => console.log(result))  // Done!
  .catch(error => console.error(error));



