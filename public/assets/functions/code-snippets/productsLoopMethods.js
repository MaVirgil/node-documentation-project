function getSum(array) {
  return array.reduce((acc, current) => acc + current, 0);
}

//getting the total price for all products
const averagePrice = getSum(
  products.map((product) => product.price)
);

//getting the total price of all organic products
const averagePriceOrganic = getSum(
  products.filter((product) => product.organic)
    .map((product) => product.price)
);