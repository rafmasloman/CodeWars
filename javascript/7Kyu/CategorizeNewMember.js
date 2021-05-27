function openOrSenior(data) {
  // ...
  const category = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      category.push("Senior");
    } else {
      category.push("Open");
    }
  }
  return category;
}
openOrSenior([
  [3, 12],
  [55, 1],
  [91, -2],
  [54, 23],
]);
