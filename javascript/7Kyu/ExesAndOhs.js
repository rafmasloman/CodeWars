// ? Solution of Exes and Ohs 7Kyu in CodeWars
function XO(str) {
  let countX = 0;
  let countO = 0;
  let check = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      countX++;
    }
    if (str[i] === "o" || str[i] === "O") {
      countO++;
    }
  }
  return countX === countO ? check : !check;
  //code here
}
// XO("xo");
console.log(XO("Zzaasd"));
