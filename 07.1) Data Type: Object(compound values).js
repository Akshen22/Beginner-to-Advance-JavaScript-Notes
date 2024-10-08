1) Create Object:
We can use the Object type to store related compound values together, like all the details of a car. 
For example, the fuelType of a car can be stored within a car object.
const car = {fuelType: "diesel"};

console.log(car);

2) Object with Multiple Properties:
Example:
const car = {
  model: 2011,
  fuelType: "diesel"
};
console.log(car);
console.log(`It is a ${car.model} car that runs on ${car.fuelType}`);


3) We can also assign the value of variables to the property of an object:

Example:
const noOfSeats = 5;

const car = {
  model: 2011,
  seatingCapacity: noOfSeats,
  fuelType: "petrol"
};
const result = `It is a ${car.model} model car that runs on ${car.fuelType} and has ${car.seatingCapacity} seats.`
console.log(result);

In the example given above, the property car.seatingCapacity is assigned the value of noOfSeats, which is 5.

4) Get Object Values - Dot Notation:
We can read the values of properties of an object using the dot notation.

Example:
const person = {
  name: "Oliver",
  hobby: "Writing"
};

console.log(person.name);

5) Challenge:
Create a variable library. Value of library is an object and the properties of that object are defined below:

Key: Value
fiction:	"Harry Potter"
autobiography:	"The diary of a young girl"
history:	"The Discovery of India"

Later, log the value of fiction and autobiography to the console using dot notation.

Solution:
const library = {
  fiction: "Harry Potter",
  autobiography: "The diary of a young girl",
  history: "The Discovery of India"
}

console.log(library.fiction, library.autobiography);

6) Add Object Property using Dot Notation:
const person = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

person.profession = "Engineer";

console.log(person);

/*Added a person object. This person's profession is "Engineer", using dot notation.*/

7) Update Object Property using Dot Notation:
We have an object person.
Let's update the age property to 23 using dot notation.

const person = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

person.age = 23;

console.log(person);

8) Get Object Values - Bracket Notation:
Always it isn't possible that will have a proper variable name, it can be number, have -,# too!
So how will do:

a) numerical:
const person = {
  12: "Adam",
  13: "Samantha"
};

console.log(person[12]);
  
b) special character:
const project = {
  "project-lead": "Adam",
  developer: "Samantha"
};

console.log(project["project-lead"]);

9) Challenge:
Create an variable results which is an object. Properties of this object are described below:

Key	Value
"history"	61
"geography"	49
"science-physics"	78
"science-chemistry"	88
"math-geometry"	51
"math-algebra"	65
Read the value of the math-geometry, and math-algebra property from the results object, 
using the bracket notation and log it to the console.

Solution:
const results = {
  "history":	61,
  "geography":	49,
  "science-physics":	78,
  "science-chemistry":	88,
  "math-geometry":	51,
  "math-algebra":	65
}

console.log(results["math-geometry"], results["math-algebra"])

10) Add Object Property using Bracket Notation:
Similarly, to add value in the key where there's a number & a special character, will use: []

Example:
const subjects = {
  101: "Physics",
  102: "Biology",
  103: "Chemistry"
};

subjects[104] = "Computer";
subjects[21 * 5] = "Mathematics"; // Same as subjects[105] = "Mathematics"

console.log(subjects);

11) Update Object Property using Bracket Notation:
Let's use the bracket notation to update the value of 103 key to "Mathematics" in the subjects object.

const subjects = {
  101: "Physics",
  102: "Biology",
  103: "Chemistry"
};

subjects[103] = "Mathematics";

console.log(subjects);
