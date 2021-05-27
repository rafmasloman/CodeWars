// ? Solution of Create Phone Number in 6Kyu Code Wars
// * Status : Passed

function createPhoneNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    // console.log(`${numbers[i]} index ke-${i}`);
    if (i == 3 || i == 7) {
      numbers.splice(i, 0, " ");
    }
  }
  numbers = numbers.join("").split(" ");
  return `(${numbers[0]}) ${numbers[1]}-${numbers[2]}`;
}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
