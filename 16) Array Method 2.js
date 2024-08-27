1) Execute Function for Each Element: forEach():
The forEach() method is like a friendly guide that helps us visit each element in an array one by one.
It allows us to perform a specific action on every element without changing the original array.

a) Method A: 
const fruits = ["apple", "banana", "mango", "orange"];

const displayFruit = fruit => {
  console.log(`${fruit} is a fruit.`);
};

const displayFruits = fruit => {
  console.log(`${fruit} is a tasty fruit.`);
};

fruits.forEach(fruit => displayFruit(fruit));

fruits.forEach(fruit => displayFruits(fruit));

b) Method B:
const fruits = ["apple", "banana", "mango", "orange"];
fruits.forEach(fruit => console.log(`${fruit} is a fruit.`));
fruits.forEach(fruit => console.log(`${fruit} is a tasty fruit.`));

c) Challenge:
In the code below, we have an array of objects. Each object holds details of a product.
Log the details of each product in the following manner: Product: [Product Name], Price: $[Product Price]
Calculate the total price of all products and log it to the console.

Solution:
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 499 },
  { id: 3, name: "Tablet", price: 299 }
];

let totalPrice = 0;

products.forEach(products => {
  console.log(`Product: ${products.name}, Price: $${products.price}`);
  totalPrice += products.price;
});

console.log(`Total Price: $${totalPrice}`);

2) Map a Function and Get a New Array:

a) Method A:
const evenNumbers = [2, 4, 6];
const createOddNumberArray = (number) => {
  return number + 1;
};
const oddNumbers = evenNumbers.map(number => createOddNumberArray(number));

console.log(oddNumbers);

b) Method B:
const evenNumbers = [2, 4, 6];
const oddNumbers = evenNumbers.map((number) => number + 1);
console.log(oddNumbers);

* The map() method returns an array, while forEach() does not. 
  Knowing this distinction is helpful when you choose the right method for your task.

c) Challenge:
Create a function doubledNumbers which accepts the array numbers as a parameter and returns a new array which has all the numbers multiplied by 2.
Log the resulting array to the console.

Solution:
const numbers = [1, 2, 3, 4, 5];

doubleNumbers = numbers.map((number => number * 2));

console.log(doubleNumbers);

3) 
