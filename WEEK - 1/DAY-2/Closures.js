// A closure is a function that remembers variables from its outer scope(lexical) scope even after the outer function has finished executing.


// a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

// function outer() {
//   let name = "Pranjal";
//   function inner() {
//     console.log("Hello, " + name);
//   }
//   return inner;
// }

// const greet = outer();
// greet(); // Output: Hello, Pranjal

//****************************************************
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();






























