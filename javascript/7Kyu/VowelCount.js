function getCount(str) {
  let vowelsCount = 0;
  const splitSTR = str.split("");
  const vowel = ["a", "i", "u", "e", "o"];
  // enter your majic here
  for (let i = 0; i < vowel.length; i++) {
    for (let j = 0; j < splitSTR.length; j++) {
      if (vowel[i] === splitSTR[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"));
