function accum(s) {
  // your code
  let word = [];
  let ss = s.toLowerCase().split("");
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      //   if (j === 0) {
      //     word.push(ss[i].toUpperCase());
      //   } else {
      //     word.push(ss[i]);
      //   }
      j === 0 ? word.push(ss[i].toUpperCase()) : word.push(ss[i]);
    }
    word.push("-");
  }
  word.pop();
  //   console.log(word.join(""));
  return word.join("");
}

console.log(accum("ZpglnRxqenU"));
// accum("ZpglnRxqenU");
