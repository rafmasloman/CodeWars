//? Solution For Paul's Misery
function paul(x) {
  let point = 0;
  for (let i = 0; i < x.length; i++) {
    switch (x[i]) {
      case "kata":
        point += 5;
        break;
      case "life":
        point += 0;
        break;
      case "Petes kata":
        point += 10;
        break;
      case "eating":
        point += 1;
        break;
      default:
        break;
    }
  }
  if (point < 40) {
    return "Super happy!";
  } else if (point < 70 && point >= 40) {
    return "Happy!";
  } else if (point < 100 && point >= 70) {
    return "Sad!";
  } else if (point > 100) {
    return "Miserable!";
  }
}

console.log(
  paul([
    "Petes kata",
    "Petes kata",
    "eating",
    "Petes kata",
    "Petes kata",
    "eating",
  ])
);
