function apple(x) {
  const toNumber = parseInt(x);
  const apple = toNumber * toNumber;
  if (apple > 1000) {
    return "It's hotter than the sun!!";
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox.";
  }
}

console.log(apple(4));
