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

2) Converting to Number:
We can use the Number() method to convert a non-number value to a number.

a) String to Number:
const string = "2";
console.log(string);
const number = Number(string);
console.log(number);

b) Empty strings get converted to 0:
let emptyString = "";
emptyString = Number(emptyString);
console.log(emptyString);

c) Non-empty Strings which don't contain a valid number get converted to NaN:
let invalidNumberString = "2abc";
invalidNumberString = Number(invalidNumberString)
console.log(invalidNumberString);  

d) Boolean to Number:
true gets converted to 1, while false gets converted to 0.
let booleanTrue = true;
booleanTrue = Number(booleanTrue);
console.log(booleanTrue);

let booleanFalse = false;
booleanFalse = Number(booleanFalse);
console.log(booleanFalse);

e) Other data types to Number:
console.log(Number(null));
console.log(Number(undefined));

f) Calling Number() on NaN returns NaN itself:
console.log(Number(NaN));

3) isNaN(): used to determine if a value is NaN ("Not-a-Number")
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
  
4) Composite data types:
When we use typeof with any composite data type, even null, we get the output "object".
Note that, when we use typeof with undefined we get the output as "undefined".
