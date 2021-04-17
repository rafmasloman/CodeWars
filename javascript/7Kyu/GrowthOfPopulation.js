function nbYear(p0, percent, aug, p) {
  // your code
  let year = 0;
  while (p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug;
    year++;
  }
  return year;
}
nbYear(1500000, 2.5, 10000, 2000000);
