// Used in function parameters to collect the "rest" of the arguments into a single array.

//Used to collect multiple elements into an array.  Mainly used in function parameters.

function addAll(...numbers) {
  console.log(numbers);
  // we can now use numbers as an array
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(addAll(1, 2, 3));        // 6
console.log(addAll(10, 20, 30, 40)); // 100

/*💡 Key Point:
...numbers collects all arguments passed to the function into an array.

This is the rest operator — it gathers.    */


//SPREAD OPERATORS - 📌 Example 1: Spreading an array into another

/*
let nums1 = [1, 2];
let nums2 = [3, 4];
let allNums = [...nums1, ...nums2];
console.log(allNums)

 📌 Example 2: Spreading into function arguments-

 function multiply(a, b, c) {
  return a * b * c;
}

let values = [2, 3, 4];
console.log(multiply(...values)); // Output: 24

📌 Example 3: Spreading an object-

let user = { name: "Pranjal", age: 22 };
let updatedUser = { ...user, age: 23 }; // overrides age
console.log(updatedUser); // { name: "Pranjal", age: 23 }


*/