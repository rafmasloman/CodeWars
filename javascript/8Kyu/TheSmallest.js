class SmallestIntegerFinder {
  findSmallestInt(args) {
    let temp = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] < temp) {
        temp = args[i];
      }
    }
    console.log(temp);
  }
}

const smallest = new SmallestIntegerFinder();
smallest.findSmallestInt([78, 56, 232, 12, 0]);
