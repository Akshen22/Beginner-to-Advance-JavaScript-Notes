1) Converting to String:
Sometimes we need to explicitly convert a value to string. 
In such cases, we can use either String() (most preferred) or toString() to convert a non-string value to a string.

a) Number to String:
console.log(2);
console.log(String(2));
console.log((2).toString());

b) Boolean to String:
console.log(true);
console.log(String(true));
console.log(true.toString());

/*However, when we need to convert null, or undefined into a string, we can only use String(). 
Using toString() in such cases will give us an error.*/

2) Converting to Boolean:

a) const name = "Sam Smith";
console.log(Boolean(name));

b) const age = 32;
console.log(Boolean(age));

c) const experience = 0;
console.log(Boolean(experience));

d) const null4 = null;
console.log(Boolean(null4));

e) const undefined5 = undefined;
console.log(Boolean(undefined5));

/*Values such as the number 0, false, null, undefined, NaN, and the empty string "", will get converted to false. These values are called falsy values.*/

3) Converting to Number:
We can use the Number() method to convert a non-number value to a number.

a) String to Number:
const string = "2";
console.log(Number(string));

b) Empty strings get converted to 0:
let emptyString = "";
console.log(Number(emptyString));

c) Non-empty Strings which don't contain a valid number get converted to NaN:
let invalidNumberString = "2abc";
console.log(Number(invalidNumberString));  

d) Boolean to Number:
true gets converted to 1, while false gets converted to 0.
let booleanTrue = true;
console.log(Number(booleanTrue));

let booleanFalse = false;
console.log(Number(booleanFalse));

e) Other data types to Number:
console.log(Number(null));
console.log(Number(undefined));

f) Calling Number() on NaN returns NaN itself:
console.log(Number(NaN));

4) isNaN(): used to determine if a value is NaN ("Not-a-Number")
When we try to convert a particular variable and don't get converted, the output we get is "true"!

a) Example:
const greeting = "Good Morning!";
console.log(isNaN(greeting));

const string = "Hello!";
console.log(isNaN(string));

console.log(isNaN("2"));

console.log(isNaN(false));

console.log(isNaN(0));

console.log(isNaN(""));

In JavaScript, when we convert "", true and false to number, we get 0, 1 and 0 respectively. 
Since these are numbers, isNaN gives false as an output.

b) Challenge:
Check and log to the console if the given value of 'userInput' is NaN or not.

const userInput = "007";
console.log(isNaN(userInput));
  
5) Composite data types:
When we use typeof with any composite data type, even null, we get the output "object".
Note that, when we use typeof with undefined we get the output as "undefined".
