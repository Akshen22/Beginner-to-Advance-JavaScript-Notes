1) Parameters & Arguments:

Example 1: 
const displayValidationError = (invalidFieldName, additionalMessage) => { // parameters
  const result = `The user ${invalidFieldName} is not valid. ${additionalMessage}`;
  console.log(result);
}

displayValidationError("name", "Please provide a valid name."); // arguments

Example 2:
const displayAge = (age) => {
  console.log(`The user is ${age} years old.`);
}

displayAge(24);

Example 3:
const user = {
  name: "",
  age: 20,
  voterIDNumber: "",
};

const displayValidationError = (invalidFieldName, additionalMessage) => {
  const result = `The user ${invalidFieldName} is not valid. ${additionalMessage}`;
  console.log(result);
}

if (!user.name) {
  displayValidationError("name", "Please provide a valid name.");
}

if (user.age >= 18 && !user.voterIDNumber) {
  displayValidationError("Voter ID Number", "Voter ID Number is required for ages 18 and above.");
}

It is important to note that parameters are the list of variables wrapped in parentheses () in a function definition. 
In the example above, (invalidFieldName, additionalMessage) are parameters of the function displayValidationError. 
Arguments are the values passed in a function call. In the above example, displayValidationError("name", "Please provide a valid name.") is a function call
and "name", "Please provide a valid name." are the arguments.

2) Default Parameters:
Consider the following example where we do not pass the second argument while invoking the displayValidationError function.

a) const displayValidationError = (invalidFieldName, additionalMessage) => {
const result = `The user ${invalidFieldName} is not valid. ${additionalMessage}`;
console.log(result);
}

displayValidationError("name");

Output: The user name is not valid. undefined!

In the above example, the second parameter additionalMessage received the value - undefined. That is why the output has "undefined" in the end. 
Any argument that is omitted will be set as undefined in the corresponding function parameter.

There might come a scenario where a function has an "optional" parameter, i.e., a parameter to which we don't always need to pass a value. 
In such cases, we can use default parameters. Default parameters are function parameters that use a specified value as the default value if a function call passes undefined to that parameter.

Let's modify the displayValidationError such that we can avoid the "undefined" in the message in case the value of additionalMessage is undefined.

b) const displayValidationError = (invalidFieldName, additionalMessage = "") => {
  const result = `The user ${invalidFieldName} is not valid. ${additionalMessage}`;
  console.log(result);
}

displayValidationError("name");

Output: The user name is not valid.  

Here, we can see an important difference between undefined in a) and null b).

c) Example 3:
const displayValidationError = (invalidFieldName, additionalMessage = "") => {
  console.log(`The user ${invalidFieldName} is not valid. ${additionalMessage}`);
}

displayValidationError("name", undefined);
displayValidationError("name");
displayValidationError();
displayValidationError("name", null);

i) displayValidationError("name", undefined) - This passes undefined to the additionalMessage parameter and hence additionalMessage will be set as "", the default value.
ii) displayValidationError("name") - Since the second argument is omitted, additionalMessage will receive undefined. 
  Hence, additionalMessage will be set as "", the default value.
iii) displayValidationError() - Since both the arguments are omitted, both invalidFieldName and additionalMessage will receive undefined. 
  Since invalidFieldName does not have a default value, its value will remain as undefined. However, additionalMessage will be assigned the default value "".
iv) displayValidationError("name", null) - invalidFieldName gets the value "name" and additionalMessage gets the value null.
v) Even though both undefined and null literally convey the lack of a value, null is still considered as a value in JavaScript. 
  That is why additionalMessage doesn't use the default value even though null was passed to it.

3) Challenge 1:
Update the function displayPackageInfo to have two two arguments orderID and status.
Based on the arguments received, the function should display Your package #<orderID> is <status> using a template string.
The default value of status should be "to be dispatched".

Solution:
const displayPackageInfo = (orderID, status = 'to be dispatched') => {
  console.log(`Your package #${orderID} is ${status}`);
};

displayPackageInfo("ABC123");

4) Challenge 2:
Create a function displayPackageInfo to have two two arguments: orderID and status
Based on the arguments received, the function should display Your package #<orderID> is <status> using a template string.
The default value of orderID should be 0001 and status should be "to be dispatched".
Call the function without any parameters.

Solution:
displayPackageInfo = (orderID = '0001', status = 'to be dispatched') => {
  console.log(`Your package #${orderID} is ${status}`);
}

displayPackageInfo();

5) return Statement:
const calculateSum = (number1, number2, number3, number4) => {
  const sumOfNumbers = number1 + number2 + number3 + number4;
  return sumOfNumbers;
}

const totalMarks1 = calculateSum(81, 90, 72, 99);
console.log(totalMarks1);

const totalMarks2 = calculateSum(72, 84, 96, 100);
console.log(totalMarks2);


In the example given above:
i) Inside the calculateSum function, the sum of all the arguments is calculated and stored in sumOfNumbers.
ii) The statement return sumOfNumbers indicates that a function call to calculateSum should return the value of sumOfNumbers.
iii) When calculateSum(81, 90, 72, 99) is invoked, the sum 342 is stored in sumOfNumbers and is then returned. 
  The returned value is stored in totalMarks1.
iv) When calculateSum(72, 84, 96, 100) is invoked, the sum 352 is stored in sumOfNumbers and is then returned. 
  The returned value is stored in totalMarks2.

6) Why return statement?
Example 1:
  
const applesPrice = 10;
const applesQuantity = 3;

const bananasPrice = 5;
const bananasQuantity = 5;

const milkPrice = 20;
const milkQuantity = 1;


function calculateItemCost (price, quantity) {
  const total = price * quantity;
  return total;
}

const totalCost =
  calculateItemCost(applesPrice, applesQuantity) +
  calculateItemCost(bananasPrice, bananasQuantity) +
  calculateItemCost(milkPrice, milkQuantity);


console.log(`Total Cost of grocery is $${totalCost}`);

Output: Total Cost of grocery is $75 

In the above example, by using return, we can reuse the result of the function calculateItemCost to calculate the cost of each item. And, then use the final cost by adding them up and storing it in totalCost. Returning values allows us to use the same logic in different situations, making our code more reusable.

7) Example 2:
function calculatePercentage(value, total) {
  return (value / total) * 100;
}

function checkPassOrFail(marksObtained, totalMarks) {
  const percentage = calculatePercentage(marksObtained, totalMarks);
  if (percentage >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}

const examResult = checkPassOrFail(75, 100);
console.log(examResult);

Output: Pass

In the above example, the calculatePercentage function uses return to provide the calculated percentage value. 
This enables us to determine if it is a Pass or Fail in the checkPassOrFail function. 
Thus, returning values makes our code modular, reusable, and more organized.
