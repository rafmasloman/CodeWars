// ? Solution of ShortesWord 7Kyu in CodeWars
function findShort(s) {
  let splitWord = s.split(" ");
  let wordLength = [];
  for (let i = 0; i < splitWord.length; i++) {
    wordLength.push(splitWord[i].length);
  }

  function count() {
    let min = wordLength[0];
    for (let i = 0; i < wordLength.length; i++) {
      if (min > wordLength[i]) {
        min = wordLength[i];
      }
    }
    return min;
  }

  return count();
}

console.log(findShort("Let's travel abroad shall we"));
