// 🎯 Task:
// Create multiple student objects.

// Each student should have: name, age, and scores (an array).

// Store them in an array.

// Loop through them and print name and average score.

let students = [
  {
    name: "Pranjal",
    age: 21,
    scores: [90, 85, 92]
  },
  {
    name: "Riya",
    age: 22,
    scores: [88, 79, 91]
  },
  {
    name: "Amit",
    age: 20,
    scores: [75, 80, 85]
  }
];

for (let student of students) {
  let total = 0;
  for (let score of student.scores) {
    total += score;
  }
  let average = total / student.scores.length;
  console.log(`${student.name}'s average score is ${average.toFixed(2)}`);
}
