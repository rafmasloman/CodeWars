function sumMix(x) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    count += parseInt(x[i]);
  }
  console.log(count);
}

sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]);
