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

b) Method B: (trick: old function name, forEach, new parameter, new console.log, new parameter, extra..)
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

c) Challenge:
Create a function doubledNumbers which accepts the array numbers as a parameter and returns a new array which has all the numbers multiplied by 2.
Log the resulting array to the console.

Solution:
const numbers = [1, 2, 3, 4, 5];

doubleNumbers = numbers.map((number => number * 2));

console.log(doubleNumbers);

3) Difference between forEach and map:

i) The forEach() method is used to loop through array elements. 
  It runs the same function on each element. It doesn't change the given array and returns undefined.
ii) The map() method also iterates through array elements. It applies a function to each element. 
  It creates a new array with the modified elements, and returns the new array.

iii) forEach():
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.forEach(number => number * 2);

console.log(doubledNumbers);

// doesn't give the result we want, multiply by 2!

iv) map():
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);

// gives the result we want, multiply by 2!

v) to get the result using forEach():
const numbers = [1, 2, 3];

numbers.forEach(number => {
  console.log(number * 2);
});

// just added console.log in between the arrow and the result of the function we want!

vi) Challenge:
In the code given below, the forEach method is used to create a new array containing all the elements of prices but with the "Rs. " prefix.
But since the forEach method does not return an array with the transformed elements, replace it with the map method.

Solution: 
Method 1 (using: map):-
const prices = [230, 420, 600];
const pricesWithPrefix = prices.map(price => `Rs. ${price}`);
console.log(pricesWithPrefix);

Method 2 (using: forEach with console.log()):-
const prices = [230, 420, 600];
const pricesWithPrefix = prices.forEach(price => {
  console.log(`Rs. ${price}`);
});
console.log(pricesWithPrefix);

4) Filter elements based on given condition:
The filter() method creates a new array containing only certain elements from the array it is invoked on.
filter() accepts a function as an argument. It invokes that function on each element of an array.

a) Example 1:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);  

In the example given above, numbers.filter(number => number % 2 === 0) returns an array that contains only those elements of numbers, 
that returns true when passed as the argument to number => number % 2 === 0.

b) Example 2:
Use the filter() method to get all the elements in the names array whose length is less than 5 and store them in the shortNames array.

Solution:
const names = ["Adam", "Eve", "Oliver", "Sam"];
const shortNames = names.filter(names => names.length<5);
console.log(shortNames);

5) Create Arrays from iterables or array-like objects: Array.from()

Example 1:
// Converting String to Array
const string = 'hello';
const newArray = Array.from(string);
console.log(newArray); // Output: ['h', 'e', 'l', 'l', 'o']

// Using mapping function
const numberArray = "1234";
const doubled = Array.from(numberArray, num => Number(num) * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

Example 2:
const convertToArrayAndTriple = (string) => {
  return Array.from(string, number => Number(number)*3)
};

console.log(convertToArrayAndTriple("123"));
console.log(convertToArrayAndTriple("1593"));
