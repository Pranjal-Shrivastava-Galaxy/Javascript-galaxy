// Step 1: Get the element
let heading = document.getElementById("title");
let button = document.getElementById("changeBtn");

// Step 2: Add event listener to button
button.addEventListener("click", function () {
  heading.innerText = "DOM Manipulation Successful!";
});
