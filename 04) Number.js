1) Store Number:
a) Positive number:
const positiveNumber = 1234;
console.log(positiveNumber);

b) Negative number:
const negativeNumber = -1234;
console.log(negativeNumber);

c) Fractional number:
const fractionalNumber = 12.34;
console.log(fractionalNumber);

d) Challenge:
Create a variable named phoneNumber and store the number 1234567890 as the value. 
Create another variable named pinCode and store the value 2255 in it.
At the end, put the values of both variables in the console.

Solution:
const phoneNumber = 1234567890;
const pinCode = 2255;

console.log(phoneNumber, pinCode);

2) NaN:
In JavaScript, NaN stands for Not a Number. 
If we perform an arithmetic operation on a value that is not a number, we get NaN as the result.

Example:
const personID = "123abc";
const product = personID * 2;
console.log(product);

3) Increase or Decrease a Number by One:
a) Increment:
We can use ++ to increment the value of a number by 1.

b) Decrement:
We can use -- to decrement the value of a number by 1.

c) Example:
let firstNumber = 45; //will use let, as it's changes & const doesn't!
let secondNumber = 45;
firstNumber++;
secondNumber--;

console.log(firstNumber, secondNumber);

d) Challenge:
Create a variable firstNumber which stores the value of 3. 
Create another variable secondNumber which stores the value 5.
Increase the value of firstNumber by one. Similarly, decrease the value of secondNumber by one.
Later check if firstNumber and secondNumber are equal or not, and log the result to the console.
Output should be a Boolean.

Solution:
let firstNumber = 3;
let secondNumber = 5;

firstNumber++;
secondNumber--;

let result = (firstNumber===secondNumber);
console.log(result);

4) Remainder:
We can use % to get the remainder. 
It returns the remainder after the division of the value on the left of % by the value on the right of %.

Example:
a) console.log(15 % 3);
--> 0 // Remainder

b) console.log(16 % 3);
--> 1 //Remainder

5) 
