8) Add Two Numbers:
The function add should return the sum of the given two numbers.

Solution:
const add = ({ x, y }) => {
  return Number (x) + Number (y);
}

9) Convert Celsius to Fahrenheit:
The function celsiusToFahrenheit converts Celsius values to Fahrenheit values.
The formula to convert Celsius to Fahrenheit is F = (C * 9/5) + 32.

Solution:
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

10) Check the Numbers and Add:
The function add should return the sum of the given two numbers. If one or both of the inputs are not valid numbers, return the string Invalid Input.

Solution:
const add = ({ x, y }) => 
(isNaN(x) || isNaN(y)) ?  "Invalid Input" : Number (x) + Number (y);

11) Product of two Numbers:
The function product should return a string representing the product of firstNumber and secondNumber.

Solution:
const product = (firstNumber, secondNumber) => {
  return `The product is ${firstNumber * secondNumber}`;
}

12) Increment a Number and Divide It:
The function incrementAndDivide should increment a given number by 1 and then divide the resulting number by 2. It should then return the final result.

Solution:
const incrementAndDivide = number => {
  const incrementNumber = number+ 1; 
  const divide = incrementNumber/2;
  return divide;
};

13) Pass or Fail:
The function checkExamResult returns Pass if the marks obtained is more than or equal to 45, otherwise it returns Fail.

Solution:
function checkExamResult(marks) {
  let Fail = "Fail";
  let  Pass = "Pass";
  
  if (marks>=45) {
    return Pass;
  }
  
  else {
    return Fail;
  }
  
}

14) Check Whether the Number is Divisible by 6:
The function isDivisible should determine whether the given number is divisible by 6 or not.
If the number is divisible by 6, return true. Otherwise, return false.

Solution:
const isDivisible = number => number % 6 == 0

15) Get a Property From an Object:
The function getProperty should extract the given property from a given object. 
If the given property is not present, return the string Not found.

Solution:

