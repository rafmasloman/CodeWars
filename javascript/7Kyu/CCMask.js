// const word = "Nananananananananananananananana Batman!";
// const toArray = word.split("");
// const changeWord = "#";

// const num = toArray.length - 4;
// for (let i = 0; i < toArray.length; i++) {
//   i < num ? (toArray[i] = changeWord) : null;
//   //   if (i < num) {
//   //     toArray[i] = changeWord;
//   //   }
// }
// console.log(toArray.join(""));

function maskify(cc) {
  const arrCC = cc.split("");
  const mask = "#";

  const num = arrCC.length - 4;
  for (let i = 0; i < arrCC.length; i++) {
    i < num ? (arrCC[i] = mask) : null;
  }
  // console.log(arrCC.join(""));
  return arrCC.join("");
}

// maskify("4556364607935616");
console.log(maskify("4556364607935616"));
