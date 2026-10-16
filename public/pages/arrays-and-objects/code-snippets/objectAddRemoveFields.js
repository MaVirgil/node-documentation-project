const person = {
  name: "John",
  age: 38,
};

person.hobbies = ['Cooking', 'Bouldering', 'Movies'];

console.log(person.hobbies);  
// => [ 'Cooking', 'Bouldering', 'Movies' ]

delete person.hobbies;

console.log(person.hobbies);
// => undefined