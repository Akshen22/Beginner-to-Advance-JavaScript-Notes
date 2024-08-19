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

7) 
