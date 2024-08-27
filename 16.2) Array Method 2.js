6) Create Arrays from array-like objects:

* When creating an array from an object, the object needs to meet a few conditions.
i) length: 7 (should be there anyhow, depending on the keys)

ii) Object properties must be indexed. This means the keys in the object should be numbers. The numbers should go from zero to the length of the array.

iii) indexing: should be put continuously, if attached 8 directly after 1, the keys which aren't given, become undefined! 
  Secondly, it's ok if the indexing key isn't in ascending/descending order!
  Also, notice that all other values that are beyond the length of the array are discarded. So, the Indian Ocean and Southern Ocean do not have a place in oceansArray.
  
Example:
const oceans = {
  0: 'Pacific Ocean',
  1: 'Atlantic Ocean',
  8: 'Indian Ocean',
  9: 'Antarctic Ocean',
  4: 'Arctic Ocean',
  length: 5
};

const oceansArray = Array.from(oceans);
console.log(oceansArray);
};

Challenge:
Use Array.from() to create an array. This array should be of length 5. It should consist of all the vowels, a, e, i, o, u.
Display the array on the console.

Solution:
const vowels = {
  0: "a",
  1: "e",
  2: "i",
  3: "o",
  4: "u",
  length: 5
}

const vowelsArray = Array.from(vowels);
console.log(vowelsArray)

7) 
