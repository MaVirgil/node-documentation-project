const person = {
  name: 'John',
  age: 38,
  address: undefined,
};

console.log(person.address.city);
// => TypeError: can't access property "city", person.address is undefined