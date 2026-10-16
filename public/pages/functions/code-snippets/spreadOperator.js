function getAverage(...numbers) {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return  sum / numbers.length;
}

const numbers = [2, 2, 4, 4];
console.log(getAverage(...numbers));
// => 3