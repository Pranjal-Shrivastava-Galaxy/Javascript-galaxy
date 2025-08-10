let student = {
  name: "Pranjal",
  age: 21,
  scores: [90, 85, 88]
};

// Access
console.log(student.name);   // dot notation
console.log(student["age"]); // bracket notation

// Modify
student.age = 22;
student.scores.push(91);

// Loop through object
for (let key in student) {
  console.log(key, student[key]);
}
