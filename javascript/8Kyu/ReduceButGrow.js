function grow(x) {
  let multiple = 1;
  for (let i = 0; i < x.length; i++) {
    multiple *= x[i];
  }
  console.log(multiple);
}
grow([4, 1, 1, 1, 4]);
