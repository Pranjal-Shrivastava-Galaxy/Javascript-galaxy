//function that checks if a number is even or odd.

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}

checkEvenOdd(7); // 7 is Odd
checkEvenOdd(8); // 8 is Even
