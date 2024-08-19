1) quotes:
a) double quotes:
const fullName = "Sam Smith";
console.log(fullName);

const book = "The Newest Dragon Stories";
console.log(book);

const someRandomSentence = "You can be a great programmer!";
console.log(someRandomSentence);

b) single quote:
const fullName = `Sam Smith`;
console.log(fullName);

const book = `The Newest Dragon Stories`;
console.log(book);

const someRandomSentence = `You can be a great programmer!`; //below esc button on keyboard: `` 
console.log(someRandomSentence);

//We can see that using single quotes or double quotes for creating strings makes no difference. 
But moving forward, to maintain consistency in the Academy, we will be using double quotes when creating strings.

2) Joining Strings:
a) We can join strings using the + operator. 
And we can store the joined result into a new variable of our choice.

const firstName = "Sam";
const lastName = "Smith";
const fullName = firstName + lastName;

console.log(fullName);

b) Insert a space between the two strings:
const firstName = "Sam";
const lastName = "Smith";
const fullName = firstName + " " + lastName;

console.log(fullName);

3) Template Strings:
a) simple way:
const firstNum = 2;
const secondNum = 3;
const result = firstNum + secondNum;

console.log("Adding " + firstNum + " and " + secondNum + " gives " + result);

b) using template string:
const firstNum = 2;
const secondNum = 3;
const result = firstNum + secondNum;

console.log(`Adding ${firstNum} and ${secondNum} gives ${result}`);

//Template strings are enclosed within backticks ` instead of single or double quotes. 
// We don't need to use '+' operator to concatenate strings.

4) 
