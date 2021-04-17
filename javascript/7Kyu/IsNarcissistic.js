// ? Solution if problem Narcissistic Number

// const num1 = 153;
// const stringNum = num1.toString();
// console.log(Math.pow(stringNum[1], stringNum.length));

// let sumPow = 0;
// for (let i = 0; i < stringNum.length; i++) {
//   sumPow += Math.pow(stringNum[i], stringNum.length);
//   //   console.log(Math.pow(stringNum[i], stringNum.length));
// }
// console.log(sumPow);

function isNarcissistic(n) {
  //your code here
  const stringNum = n.toString();
  let sumPow = 0;
  for (let i = 0; i < stringNum.length; i++) {
    sumPow += Math.pow(stringNum[i], stringNum.length);
    //   console.log(Math.pow(stringNum[i], stringNum.length));
  }
  return sumPow === n ? true : false;
}

console.log(isNarcissistic(153));
