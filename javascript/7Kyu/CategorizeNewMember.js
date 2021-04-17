function openOrSenior(data) {
  // ...
  const category = [];
  for (let i = 0; i < data.length; i++) {
    // for (let j = 0; j < data[i].length; j++) {

    // }
    if (data[i][0] >= 55 && data[i][1] > 7) {
      console.log(`${data[i]} Senior Category`);
      category.push("Senior");
    } else {
      console.log(`${data[i]} Open Category`);
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
