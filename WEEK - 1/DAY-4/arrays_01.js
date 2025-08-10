let fruits = ["apple", "banana", "cherry"];

// Looping
for (let fruit of fruits) {
  console.log(fruit);
}

// Methods
fruits.push("mango");      // Add to end
fruits.pop();              // Remove from end
fruits.shift();            // Remove from start
fruits.unshift("kiwi");    // Add to start

let sliced = fruits.slice(1, 3);  // Copy
fruits.splice(1, 1, "grape");     // Modify
