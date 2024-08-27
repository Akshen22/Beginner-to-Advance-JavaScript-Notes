6) Create Arrays from array-like objects:

* When creating an array from an object, the object needs to meet a few conditions.
i) length: 7 (should be there anmyhow, depending on the keys)

ii) Object properties must be indexed. This means the keys in the object should be numbers. And the numbers should go from zero to the length of the array.

iii) indexing: should be put continuously, if attached 8 directly after 1, the key which aren't given, becomes undefined! 
  Secondly, it's ok if the indexing key isn't in ascending/descending order! 
  
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

