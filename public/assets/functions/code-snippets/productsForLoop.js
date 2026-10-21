function getTotalPrice(products) {
  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }

  return sum;
}