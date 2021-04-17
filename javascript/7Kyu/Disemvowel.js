function disemvowel(str) {
  const vowel = ["a", "i", "u", "e", "o"];
  const strToArr = str.split(" ");
  const newStr = [];
  for (let i = 0; i < strToArr.length; i++) {
    for (let j = 0; j < strToArr[i].split("").length; j++) {
      newStr.push(strToArr[i][j]);
    }
  }
  console.log(newStr);
  return str.length;
  //   return strToArr;
}

console.log(disemvowel("This website is for losers LOL!"));
