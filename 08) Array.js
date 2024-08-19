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

4) Adding to Array:
Example:
const vegetables = ["corn", "carrot", "potato"];
vegetables[3] = "beetroot";
console.log(vegetables);

5) Updating Array Element:
We are updating the value of the second element from "Cricket" to "Hockey".

const sports = ["Football", "Cricket", "Basketball"];
sports[1] = "Hockey";

console.log(sports);

6) Array Indexes:
In JavaScript, the elements do not have to be stored in consecutive indexes. 
We can also have, for example, an array with elements in non-consecutive indexes: 0, 1, 2, and then 7, 
as shown in the example given below:

const names = ["Oliver", "Adam", "Eve"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

names[7] = "Sam";
console.log(names[7]);

console.log(names);

7) Mixing Different Data Types in Array:
const name = "Parker";
const mixedArray = [1, "hello", name, true, null, undefined];

const arrayOfArrays =[
  [1, 2, 3, 4, 5],
  ["Peter", "Mary", "May", "Ben"],
  [true, false, true, false]
];

const arrayOfObjects = [
  {one: 1, two: 2},
  {fruit: "apple", vegetable: "onion"}
];

console.log(mixedArray);
console.log(arrayOfArrays);
console.log(arrayOfObjects);

8) Choose appropriate data type to store the following details of a movie:

Key	Value
name	"Unbelievable"
genre	"Crime", "Drama"
cast	"Lisa Cholodenko", "Michael Dinner", "Susannah Grant", "Merritt Wever"
imdbRating	6
Then update the IMDB rating of the movie to be 10.

Log to the console an array with all the details of the movie. In a way that only values are printed.

Solution:
let movie = {
    name: "Unbelievable",
    genre: ["Crime", "Drama"],
    cast: ["Lisa Cholodenko", "Michael Dinner", "Susannah Grant", "Merritt Wever"],
    imdbRating: 6
};

movie.imdbRating = 10;

let movieDetails = [
    movie.name,
    movie.genre,  // Include genre as an array
    movie.cast,   // Include cast as an array
    movie.imdbRating
];

console.log(movieDetails);
