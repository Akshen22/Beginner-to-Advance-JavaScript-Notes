1) Create Array:

a) An array is used to store multiple values together.
An array is built by a pair of square brackets, with values placed inside it separated by commas.
Let us take an example of a list of fruits:
const fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);

b) Arrays in JavaScript are special kind of objects. Similar to an object, it can hold a mix of different data types.
Consider the following example:
const mixedArray = [1, True, "Hi", null, undefined];
console.log(mixedArray);

2) Challenge=:
Create an array named numbers with the following elements:
1,2,3,4,5

Create another array named fruits with the following values:
apple,
banana,
cherry,
watermelon
Log the value of both arrays to the console.

Ans.} 
const numbers=[1,2,3,4,5];
const fruits=["apple", "banana", "cherry", "watermelon"];

console.log(numbers, fruits);

3) Reading from Array:
Each element of an array has a number associated with it starting from 0 and is known as the index of that element. 
It is used to indicate the position of an element within the array. That is why we say an array is indexed.

Example 1:
const fruits = ["Apple", "Orange", "Banana", "Mango", "Cherry"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

Example 2:
const fruits = ["Apple", "Orange", "Banana", "Mango", "Cherry"];

const result = (`Second fruit is ${fruits[1]}`);
console.log(result);
