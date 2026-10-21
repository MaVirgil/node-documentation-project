function getAverage(...numbers) {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return  sum / numbers.length;
}

console.log(getAverage(2, 2, 4, 4));
// => 3