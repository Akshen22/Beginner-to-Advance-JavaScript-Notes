1) Data Type: undefined:

a) undefined is a data type in JavaScript.
Example:
const name = undefined;
console.log(name);

b) undefined in let:
A variable declared using let, whose value hasn't been assigned yet, has undefined as it's default value.

Example:
let name = "Oliver";
console.log(name);

let age;
console.log(age);

/*age does not have any value assigned to it. 
That is why console.log(age) displays undefined, which is the default value.*/

c) undefined in const: 
We won't get automatically assigned with undefined if no value is given during declaration. 
If we don't provide any value, then we'll get a Syntax Error like in the following example.

Example:
const age;
console.log(age);

d) Challenge:
Create a variable name without assigning any value to it.
Log the value of name to the console.

Solution:
let name;
console.log(name);

2) Data Type: null:

a) When a variable is undefined, it means it has been given no value to hold. 
Whereas, when a variable is null, it means the variable has a value, the value null.

Example:
const name = null;
console.log(name);

b) Challenge:
Create a variable firstName without assigning any value to the same.
Create another variable lastName also without assigning any value.
Later give lastName a value of null.
Check if firstName is equal to lastName and log the Boolean result to the console.

Solution:
let firstName;
let lastName;
lastName = null;

console.log(firstName===lastName);
