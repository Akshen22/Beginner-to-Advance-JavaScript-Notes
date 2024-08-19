1) Adding Array Element  

a) push: used to add a new element to the end of an array.

const vegetables = ["corn", "carrot", "potato"];
vegetables.push("beetroot");

console.log(vegetables);

b) unshift: used to add a new element at the beginning of an array.

const vegetables = ["corn", "carrot", "potato"];
vegetables.unshift("beetroot");

console.log(vegetables);

2) Removing Array Element:

a) pop: 

i) removes the last element of an array.
const sports = ["Football", "Cricket", "Basketball"];
sports.pop();

console.log(sports);  

ii) also returns the element that was removed:
const sports = ["Football", "Cricket", "Basketball"];
console.log(sports.pop());

b) shift:
i) removes the first element of an array
const sports = ["Football", "Cricket", "Basketball"];
sports.shift();

console.log(sports);

ii) also returns the element that was removed
const sports = ["Football", "Cricket", "Basketball"];
console.log(sports.shift());
  
3) Array Length: used to get the number of elements in an array, also known as the length of the array.

Example:
const sports = ["Football", "Cricket", "Basketball", "Tennis", "Hockey"];
console.log(sports.length);

sports[9] = "Volleyball"
console.log(sports.length);

console.log(sports);

/*The sports array initially contained 5 elements.
Then another element was added to the index 9. 
As we saw in the previous chapter, this means that all the indexes from 5 to 8 will contain the value undefined.
After that, when we checked the value of sports.length, we got the value 10 because even the undefined elements were counted.*/
