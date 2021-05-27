// ! Not Finished yet

function disemvowel(str) {
  const vowel = ["a", "i", "u", "e", "o"];
  const changeStr = str.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (
        changeStr[i] === vowel[j].toUpperCase() ||
        changeStr[i] === vowel[j]
      ) {
        changeStr.splice(i, 1);
      }
    }
  }
  str = changeStr.join("");
  return str;
}

// disemvowel("This website is for losers LOL!");
console.log(disemvowel("aaaa"));
