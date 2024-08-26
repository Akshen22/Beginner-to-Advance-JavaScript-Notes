1) Execute Function for Each Element:

a) forEach():
The forEach() method is like a friendly guide that helps us visit each element in an array one by one.
It allows us to perform a specific action on every element without changing the original array.

Let us look at an example:
const fruits = ["apple", "banana", "mango", "orange"];

const displayFruit = fruit => {
  console.log(`${fruit} is a fruit.`);
};

const displayFruits = fruit => {
  console.log(`${fruit} is a tasty fruit.`);
};

fruits.forEach(fruit => displayFruit(fruit));

fruits.forEach(fruit => displayFruits(fruit));

b) 
