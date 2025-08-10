// getElementById - selects element by ID
let headingById = document.getElementById("title");
console.log("getElementById:", headingById);

// getElementsByClassName - returns HTMLCollection
let paragraphs = document.getElementsByClassName("text");
console.log("getElementsByClassName:", paragraphs); // HTMLCollection

// getElementsByTagName - returns HTMLCollection
let allParagraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", allParagraphs);

// querySelector - returns the first match
let firstPara = document.querySelector(".text");
console.log("querySelector:", firstPara);

// querySelectorAll - returns a NodeList of all matches
let allHeadings = document.querySelectorAll(".heading");
console.log("querySelectorAll:", allHeadings);

// Bonus: Add Event Listener for Button
let button = document.getElementById("changeBtn");
button.addEventListener("click", function () {
  headingById.innerText = "DOM Manipulation Successful!";
});
