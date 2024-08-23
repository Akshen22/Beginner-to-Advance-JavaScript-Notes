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

5) Naming Variables - camelCase:
For variables containing multiple words, we write all the words together without spaces.
To distinguish each word, we capitalize the first alphabet of all the words, except for the first word. 
This is known as camelCase.
  
Let's take a look at another example:
const lengthOfBox = 120;
console.log(lengthOfBox);

Here are some other examples of names using camelCase- 
firstName, lastName, temperatureInCelsius, fruitsWithRedColor

6) const (constant): used to create a variable whose value is not intended to be changed at all, once it is created.
If we try to change the value of a variable created using the const keyword, we will get an error.
But if there's a variable after the const, we can change it! (example: const fruit {name: "Apple"}) --> fruit.name = "Banana"; will get output as Banana!

Example:
const speed = 40;
console.log(speed);

speed = 56; // This will cause an error when the code is run
console.log(speed);

The first line in the above example const speed = 40; can be split into two parts.
a) declaration: const speed
This part where we create the variable is called a declaration.
b) initialization: = 40;
The second part of assigning the created (declared) variable an initial value is called initialization.
c) We will be writing declaring a variable instead of creating a variable from now on.
d) We should also keep in mind that when declaring a variable using the const keyword, we must always assign it a value right away.

7)  let:
a) We should use const by default to declare all variables. 
However, if we know that the value of the variable needs to be changed later, we need to declare the variable using the let keyword.

Example:
let speed=40;
console.log(speed);

speed=56;
console.log(speed);

In the above example:
We declared the variable speed using let keyword and assigned the value 40 to it.
Then we changed the value of speed to 56 with the statement speed = 56.

b) When declaring a variable using the let keyword, it is not necessary to assign it a value. 
We can assign a value to let after it is declared.

Example:
let length; // declaration
length = 123; // initialization
console.log(length);

c) It is important to note that until a value is assigned to the variable declared using let, 
it will contain the value undefined.

Example:
let length;
console.log(length); // it will print 'undefined' when the code is run
length = 123;
console.log(length);

8) Challenges:
i) Create two variables fruitName and fruitQuantity. Store value apple to fruitName and 5 to fruitQuantity.
Later change the value of fruitQuantity to 6.

Solution:
const fruitName = "apple";
let fruitQuantity = 5;

fruitQuantity = 6;

ii) In the code given below, create a variable named fullName and assign it a value Sam Smith.
Create two other variables named timeInMinutes and runs with the initial value of 0.
Then change the value of timeInMinutes to 50 and runs to 100.
At the end, print the values of fullName, timeInMinutes and runs in that order.

Solution:
const fullName = "Sam Smith";
let timeInMinutes = 0;
let runs = 0;

timeInMinutes = 50;
runs =  100;

console.log(fullName);
console.log(timeInMinutes);
console.log(runs);

* Assignment vs Mutation:
a) Assignment:
let fruits = ["Apple", "Banana", "Mango"]
fruits = ["Strawberry", "Blueberry"]
--> Will get added, so it's called an "Assignment"!

b) Mutation:
let cities = ["Paris", "London", "Chicago"]
cities[0] = "Tokyo"
--> Whereas, here will replace the 0th place id, Paris to Tokyo, and so it's called Mutation!
