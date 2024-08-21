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

2) Function Expression:

const displayValidationError = function () {
  console.log("The user details are not valid.");
}

displayValidationError();

In the above example, we are assigning a function with no name to the variable displayValidationError. 
Here, the variable name serves as the function name. This function, without a name, is called an anonymous function.

3)  Use the Arrow Function:

Arrow function is a different way of defining a function. Let's convert the function displayValidationError from the previous chapter to an arrow function!

const displayValidationError = () => {
  console.log("The user details are not valid.");
}

displayValidationError();

Arrow function is basically an expression assigned to a variable. 
In the example above, the arrow function is assigned to the variable displayValidationError. 
The Arrow function expression starts with the parentheses (), followed by the arrow operator =>, and the function body.

4) Example:
const greetWelcome = () => {
  console.log("Welcome");
}

greetWelcome();

const greetHi = () => {
  console.log("Hi");
}

greetHi();

5) We can see that the two functions are both doing the same thing. They are both putting on screen something. 
  They are different only because of the value they put on the screen. 
  Instead of repeating ourselves, let's create a single function that can understand what value we want on the screen.

Example 1:
const greeting = (greetingType) => {
  console.log(greetingType);
}

greeting("Hi");
greeting("Hello");
greeting("Welcome");

Example 2:
We have a function called showName that puts any name that we provide to it on the screen.
Run it once and ensure that it uses Renu Sen as the value.
Then, run it again, and this time run it so that we see the name Sam Smith on the screen.

Solution:
const showName = (Name) => {
  console.log(Name);
}

showName("Renu Sen");
showName("Sam Smith");

6) What if we need multiple values? We can simply attach the second one! But how? 
  
a) Look below:
const calculateSum = (firstNumber, secondNumber) => {
  const sum = firstNumber + secondNumber;
  console.log(sum);
}

calculateSum(2, 998);
calculateSum(12, 12);
calculateSum(50, 63);

/*Just make a list of the values that you need in the function and put them in the parentheses using commas.*/

b) Example 2:
const showCapitalCity = (countryName, capitalName) => {
  console.log(`${capitalName} is the capital of ${countryName}.`);
}

showCapitalCity("New Zealand", "Wellington");
