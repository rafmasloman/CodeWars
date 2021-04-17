//? Solve for ComplementaryDNA

function DNAStrand(dna) {
  //your code here
  const splitDNA = dna.split("");
  for (let i = 0; i < splitDNA.length; i++) {
    switch (splitDNA[i]) {
      case "A":
        splitDNA[i] = "T";
        break;
      case "T":
        splitDNA[i] = "A";
        break;
      case "C":
        splitDNA[i] = "G";
        break;
      case "G":
        splitDNA[i] = "C";
        break;
      default:
        break;
    }
  }
  const newDna = splitDNA.join("");
  return newDna;
}
DNAStrand("GTAT");
