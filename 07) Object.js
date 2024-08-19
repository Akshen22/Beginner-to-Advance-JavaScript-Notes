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





