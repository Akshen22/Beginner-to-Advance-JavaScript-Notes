1) Keywords:
var: Declares a variable (function-scoped, can be re-assigned).
let: Declares a block-scoped variable (can be re-assigned).
const: Declares a block-scoped, constant variable (cannot be re-assigned).

2) console.log("Length in centimeters:");
console.log(120);

console.log("Length in meters:");
console.log(120 / 100);

console.log("Length in kilometers:");
console.log(120 / 100000);

/*Here, we are writing 120 in each stage, to get the expected answer we want!*/
/*So, will use: variables!*/

3) Variable:
const length = 120;

console.log("Length in centimeters:");
console.log(length);

console.log("Length in meters:");
console.log(length / 100);

console.log("Length in kilometers:");
console.log(length / 100000);

/*const: constant, length: variable*/

4) Example:
const priceOfPencil = 5;

console.log("Price of 1 pencil:");
console.log(priceOfPencil);

console.log("Price of 5 pencils:");
console.log(priceOfPencil * priceOfPencil);

console.log("Price of 10 pencils:");
console.log(priceOfPencil * 10);

5) Challenge:
Create two variables named morningWish and otherWishes.
Assign morningWish a value of "Good Morning!" and otherWishes a value of "Good Afternoon, Good Evening and Good Night!".
At the end, display on the screen the values of morningWish and otherWishes, in that order.

Ans.)
const morningWish = "Good Morning!";
const otherWishes = "Good Afternoon, Good Evening and Good Night!";

console.log(morningWish, otherWishes)  

6) Naming Variables:
a) When we declare a new variable, there are certain rules we need to follow for the name of the variable:
The name should either start with an alphabet or an underscore, i.e., _.

Example:
const validVariableName = 120;
console.log(validVariableName);

let _validVariableName = 130;
console.log(_validVariableName);

const 0invalidVariableName = 140; // This will show an error as there's "0" in the beginning!
console.log(0invalidVariableName);

Correct:
const validVariableName = 120;
console.log(validVariableName);

let _validVariableName = 130;
console.log(_validVariableName);

const invalidVariableName = 140; // No errors!
console.log(invalidVariableName);

b) The rest of the name: can only contain alphabets, numbers and underscores.

Example:
const validVariableName_1 = 150;
console.log(validVariableName_1);

let invalid-variable-name = 160; // This will show an error as it has: "-"
console.log(invalid-variable-name);

Correct:
const validVariableName_1 = 150;
console.log(validVariableName_1);

let invalid_variable_name = 160; 
console.log(invalid-variable-name);

c) A reserved keyword (const, let, var) cannot be used as a variable name. 
For example, let is a keyword used to declare variables.
We cannot declare a variable with the name let.

Example: 
const let = 170; // This will show an error console.log(let);

Correct:
const let = 170;

d) Variable names are case-sensitive. 
  
Example:
const noOfBurgers = 170;
console.log(noOfBurgers);
console.log(noofburgers); // This will show an error

We declared a variable with the name noOfBurgers, which is not the same as noofburgers.
We can have two variables with the names noOfBurgers and noofburgers.

Correct:
const noOfBurgers = 170;
console.log(noOfBurgers);

const noofburgers = 12;
console.log(noofburgers);

5) 
