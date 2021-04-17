function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    } else if (a[i] != x) {
      return false;
    }
    // return a[i] === x ? true : false;
  }
  // your code here
}

// const checkNum = check([66, 101], 66);
const checkNum = check(["t", "e", "s", "t"], "e");
console.log(checkNum);
console.log("e" === "e");
