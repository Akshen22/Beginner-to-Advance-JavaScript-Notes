3) Comprehensive Challenge - Logical operations (AND/OR):
If the number is less than or equal to 10 and the string has a length greater than or equal to 5, or if the boolean is true, 
log true to the console, else log false.

Use the following to test the code:
number = 10;
string = "hi";
boolean = true;

Solution:
const givenNumber = 10;
const givenString = "hi";
const givenBoolean = true;

if (givenNumber <= 10 && givenString.length >= 5 || givenBoolean === true) {
  console.log(true);
}
else {
  console.log(false);
}

4) NOT:


