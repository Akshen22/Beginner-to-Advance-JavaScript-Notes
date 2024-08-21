1) Overview:
const apples = {
  price: 5,
  quantity: 3,
};

const bananas = {
  price: 4,
  quantity: 2,
};

const milk = {
  price: 8,
  quantity: 1,
};

const totalCost =
  apples.price * apples.quantity +
  bananas.price * bananas.quantity +
  milk.price * milk.quantity;

const result = `Total Cost: ${totalCost}`;
console.log(result);

--> In the above program, we need to individually calculate price and quantity of the fruits 
and total it, a very lengthy work, right?
So, let's bring a shortcut method which gonna be done, using: "function"!

function: A function is created using the function keyword. 
The basic structure of a function includes the function name, parentheses, and a code block enclosed in curly braces.
syntax: 
function displayValidationError() {
  console.log("The user details are not valid.");
}

displayValidationError();

Example:
const apples = {
  price: 5,
  quantity: 3
};

const bananas = {
  price: 4,
  quantity: 2
};

const milk = {
  price: 8,
  quantity: 1
};

function calculateItemCost(item) {
  return item.price * item.quantity;
}

const totalCost =
  calculateItemCost(apples) +
  calculateItemCost(bananas) +
  calculateItemCost(milk);

const result = (`Total Cost: ${totalCost}`);
console.log(result);
