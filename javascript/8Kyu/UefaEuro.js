function uefaEuro2016(teams, scores) {
  // your code...
  //   const winner =
  //     scores[0] > scores[1] ? `${teams[0]} won!` : `${teams[1]} won!`;
  let winner = "";
  if (scores[0] > scores[1]) {
    winner = `${teams[0]} won!`;
  } else if (scores[0] < scores[1]) {
    winner = `${teams[1]} won!`;
  } else {
    winner = `teams played draw`;
  }

  // return `At match ${teams[0]} - ${teams[1]}, ${winner}`;
  console.log(`At match ${teams[0]} - ${teams[1]}, ${winner}`);
}
uefaEuro2016(["Portugal", "Iceland"], [1, 1]);
