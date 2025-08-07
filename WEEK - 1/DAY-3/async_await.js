//Async and await


//We can make any function async and inside that- we can await promises inside that.
//An async function always returns a promise.  -> EMPTY PROMISE

function wait2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("2 seconds done");
    }, 2000);
  });
}

async function doSomething() {
  console.log("Start");
  const result = await wait2Seconds();//Wait here
  console.log(result); // after 2 sec: "2 seconds done"
  console.log("End");
}

doSomething();               

/* 
Async and await are features in JavaScript that make working with asynchronous code (like Promises) easier and more readable.

async Function->

When you declare a function with async, it always returns a Promise.
Inside an async function, you can use the await keyword.

await

await can only be used inside async functions.
It pauses the execution of the function until the Promise is resolved or rejected.
The result of the Promise is returned after await.

Example (from your code)

How it works:

doSomething() starts and logs "Start".
It calls wait2Seconds() and waits (await) for it to finish (2 seconds).

After 2 seconds, it logs "2 seconds done".
Then it logs "End".

Summary:

async and await help you write asynchronous code that looks and behaves more like synchronous code, making it easier to read and maintain.

*/
                                                                                                                                                                                                                                                                              