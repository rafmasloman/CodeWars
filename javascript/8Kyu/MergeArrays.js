function mergeArrays(arr1, arr2) {
  let arrNew = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      arrNew.push(arr2[i]);
    }
    arrNew.push(arr1[i]);
  }

  const sortArr = arrNew.sort((a, b) => a - b);
  console.log(sortArr);
}

mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
