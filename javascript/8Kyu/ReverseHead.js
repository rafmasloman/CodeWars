function fixTheMeerkat(arr) {
  //your code here
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}

const reverse = fixTheMeerkat(["ground", "rainbow", "sky"]);
console.log(reverse);
