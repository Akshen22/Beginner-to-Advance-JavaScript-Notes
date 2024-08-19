1) Calculate and Display the Facts:
If the details of a country are provided in the below format:

Key	Value
name	Uruguay
populationAsof2022	3407213
areaInKMSquare	181034
worldCupWinningYears	1930, 1950
Write a code that takes in the above country details to perform the following actions:

You need to print the population density of the country in the following format:
The population density of [Country Name] is [Population Density].
[Population Density] = population / area in square kilometer.
You need to print the total number of years the country has won the FIFA Football World Cup based on worldCupWinningYears in the format:
[Country Name] has won [total number of years won] FIFA World Cups.

Solution:
const countryDetails = {
  name: 'Uruguay',
  populationAsof2022: 3407213,
  areaInKMSquare: 181034,
  worldCupWinningYears: [1930, 1950],
};

const populationDensity =  countryDetails.populationAsof2022 / countryDetails.areaInKMSquare;
console.log(`The population density of ${countryDetails.name} is ${populationDensity}.`);

const totalWorldCupWins = countryDetails.worldCupWinningYears.length;
console.log(`${countryDetails.name} has won ${totalWorldCupWins} FIFA World Cups.`)

2) Print Company Details:
If the details of an office are provided in the below format:

Key	Value
name	Tata Sons
address	BOMBAY HOUSE 24 HOMI MODY STREET
city	Mumbai
state	Maharashtra
pinOrZipCode	400001
country	India
Write a code that takes in these office details to print a statement in the format as shown below:

[Company Name] is from [City Name], [State Name] in [Country Name]. Their pincode/zipcode is [Pin or Zip code].

Solution:
const officeDetails = {
	name: "Tata Sons",
	address: "BOMBAY HOUSE 24 HOMI MODY STREET",
	city: "Mumbai",
	state: "Maharashtra",
	pinOrZipCode: "400001",
	country: "India"
};

console.log(`${officeDetails.name} is from ${officeDetails.city}, ${officeDetails.state} in ${officeDetails.country}. Their pincode/zipcode is ${officeDetails.pinOrZipCode}.`)

3) Even Roll Call:
Here is a list of attendance percentages of students from roll-numbers 1-10 respectively:
["68", "44", "83", "78", "91", "33", "57", "89", "80", "32"]
Print out the attendance percentage of students with even roll numbers in the format:
The attendance percentage of roll number: 2 is [attendance percentage value], roll number: 4 is [attendance percentage value], ... and roll number: 10 is [attendance percentage value].

Solution:
const attendancePercentages = ["68", "44", "83", "78", "91", "33", "57", "89", "80", "32"];

console.log(`The attendance percentage of roll number: 2 is ${attendancePercentages[1]}, roll number: 4 is ${attendancePercentages[3]}, roll number: 6 is ${attendancePercentages[5]}, roll number: 8 is ${attendancePercentages[7]} and roll number: 10 is ${attendancePercentages[9]}.`)
