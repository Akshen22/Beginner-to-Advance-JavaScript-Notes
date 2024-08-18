9) Declaring Multiple Variables in a Single Line:
a) We can declare multiple variables in a single line by separating them with commas.
syntax: 
let length, width, height;

b) We can combine the variable declaration and initialization into a single line.
syntax: 
const length = 120, width = 60, height = 40;
console.log("The values of Length, Height and Width are:")
console.log(length, height, width);

10) Data Types:
a) string:
const wish = "Hello World"
console.log(wish);

b) number:
const speed = 51;
console.log(speed);

c) boolean:
const answer = true;
console.log(answer);

d) object:
const user = { name: "Sam Smith", age: 32 };
console.log(user);

11) typeof: We can identify the type of any data, using typeof. 
Consider the following example:
console.log(typeof 12345);
console.log(typeof 12.345);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof "Akshen");

12) Expressions:
An expression is a piece of code that resolves to a value.
Consider the following example:

console.log(20 + 30);
const length = 1000;
console.log(length / 100);
console.log(typeof "Hello World");

In the above example:
a) 20 + 30 is an expression. + is the operator. 20 and 30 are operands. It resolved to the value 50.
b) length = 1000 is an expression. = is the operator. length and 1000 are operands.
c) length / 100 is an expression. / is the operator. length and 100 are operands.
d) typeof "Hello World" is an expression. typeof is the operator. "Hello World" is the operand.

i) Note that, operators that require two operands are called binary operators. +, -, *, /, and = are all binary operators.
ii) Operators that require only one operand are called unary operators. typeof is a unary operator.
iii) The operators +, -, *, and / are called arithmetic operators and are used to perform arithmetic operations on numbers.

13) Storing Result of Expressions:
When we add an expression as a value to a variable, it first gets evaluated and then the result is stored in the variable.

Consider the following example:
const sum = 23 + 45;
console.log(sum);

In the example given above, we are storing the result of an expression 23 + 45 as a value to the variable sum.
In the next line, we are logging the value of sum to the console. We see that the console displays 68 and not the expression 24 + 45 itself.
This is because the expression is first evaluated, then the result of this evaluation, 68, is stored as a value for the variable sum.

14) Challenge:
We have provided below the results of the scores of Harry, Ron, and Sam in a test. 
Calculate and store the average marks scored by all three in a variable. Also, log it to the console.

const markScoredByHarry = 7;
const markScoredByRon = 7;
const markScoredBySam = 11;
const avg = (markScoredByHarry + markScoredByRon + markScoredBySam) / 3;
console.log(avg);

15) 
