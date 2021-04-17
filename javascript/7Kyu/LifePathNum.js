function lifePathNumber(dateOfBirth) {
  // Your solution...
  const result = [];
  const dateSplit = dateOfBirth.split("-");

  // ? Function For Calculate birthDay
  const birthDay = (split) => {
    let sumBirthDay = 0;
    let sumBirthDayDigit = 0;
    for (let i = 0; i < split.length; i++) {
      sumBirthDay += Number(split[i]);
    }

    for (let i = 0; i < sumBirthDay.toString().split("").length; i++) {
      sumBirthDayDigit += Number(sumBirthDay.toString().split("")[i]);
    }

    return sumBirthDayDigit;
  };

  const results = (result) => {
    for (let i = 0; i < dateSplit.length; i++) {
      result.push(birthDay(dateSplit[i].split("")));
    }
    return result;
  };

  const ymd = () => {
    results(result);
    let sumYMD = 0;
    for (let i = 0; i < result.length; i++) {
      sumYMD += result[i];
    }
    return sumYMD;
  };

  const lifePath = () => {
    const ymdString = ymd().toString();
    let sumLifePath = 0;
    for (let i = 0; i < ymdString.split("").length; i++) {
      sumLifePath += Number(ymdString.split("")[i]);
    }
    if (sumLifePath > 9) {
      const lpString = sumLifePath.toString();
      return Number(lpString.split("")[0]);
    }
    return sumLifePath;
  };
  return lifePath();
}
console.log(lifePathNumber("1961-07-04"));
