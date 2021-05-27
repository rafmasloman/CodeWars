// ? Sum of Two Lowest Positive Integers
function sumTwoSmallestNumbers(numbers) {
  //Code here
  let min = numbers[0];
  let min2 = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  console.log(min);
}

sumTwoSmallestNumbers([5, 8, 12, 2, 22]);
