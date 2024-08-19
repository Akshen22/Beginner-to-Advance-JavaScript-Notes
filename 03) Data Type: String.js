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

const someRandomSentence = `You can be a great programmer!`; //below esc button on keyboard: ``, known as backticks! 
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

c) Challenge:
Create a variable named firstName and store the string Sam as the value. 
Create another variable named lastName and store the string Smith as the value. 
Join both firstName and lastName and assign it to a new variable named fullName.
Finally using the variables firstName, lastName and fullName, print the below two sentences to the console.
Your first name is [First Name] and last name is [Last Name].
Good Morning [Full Name]! Have a great day.

Solution:
const firstName = "Sam";
const lastName = "Smith";
const fullName = firstName+ " " +lastName;

console.log(`Your first name is ${firstName} and last name is ${lastName}.`);
console.log(`Good Morning ${fullName}! Have a great day.`)

4) String Interpolation:
We can insert the values of variables into a template string using the ${} notation. 
This is known as string interpolation.

Example:
const totalIncome = 60000;
const totalExpense = 36000;

console.log(`Your balance is ${totalIncome - totalExpense}`);

/*Above, we are using string interpolation to insert the value of an expression into a template string.
inserting both values in only one: {}*/

5) Multi-line Template Strings:
a) Example:
const itemList = `Fruits:
  Apple
  Mango
  Banana
  Orange
`;

console.log(itemList);

b) Challenge:
get output:
"Take risks in your life;

If you win, you can lead!
If you lose, you can guide!"

— Swami Vivekananda

Solution:
const quote = `"Take risks in your life;

If you win, you can lead!
If you lose, you can guide!"

— Swami Vivekananda`;

console.log(quote);
