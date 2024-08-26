1) Book Fair:

If the details of a book are provided in the below format:

Key	Value
title	Malgudi Days
author	R. K. Narayan
"alreadyRead"	true
isAvailable	true
Write code that takes in these book details to perform the following actions:

For each book, use the format, [Book Name] by [Author Name] and print the book title and book author.
You need to print these additional statements to the console based on the provided conditions:
If the user has read the book: You have already read [Book Name] by [Author Name].
If the user has not yet read the book and it is available.": Since [Book Name] by [Author Name] is available, you can read it next.
If the user has not yet read the book, but it is not available: Currently, $[Book Name] by [Author Name] is unavailable. 
  You can plan to read it next once it becomes available.

Make sure your code is flexible enough to work with any value of the bookDetails variable that meets these requirements.

Solution:
const findTheNextBook = (bookDetails) => {
  console.log(`${bookDetails.title} by ${bookDetails.author}`);

  if (bookDetails.alreadyRead) {
    console.log(`You have already read ${bookDetails.title} by ${bookDetails.author}.`);
  } 
  else {
    if (!bookDetails.isAvailable) {
      console.log(`Currently, ${bookDetails.title} by ${bookDetails.author} is unavailable. You can plan to read it next once it becomes available.`);
    } 
    else {
      console.log(`Since ${bookDetails.title} by ${bookDetails.author} is available, you can read it next.`);
    }
  }
}

2) Print Car Details:

If the details of a car are provided in the below format:

Key	Value
name	Tata Nexon
manufacturer	Tata
countryOfOrigin	India
colour	blue
supportElectricOption	true
Write code that takes in these car details to perform the following actions:

Print the following welcome message to the console only if the car is Electric: Electric cars are the future! The car we are presenting now is called [Name Here].
If the car manufacturer's origin is in India: This car is made in India.
If not: The country of origin is [Name of the country].
If the car's colour is black: The car's colour is metallic black.
If it is white: The car's colour is snow blush.
If it is neither black nor white: This car is [colour of the car].
Make sure your code is flexible enough to work with any value of the carDetails variable that meets these requirements.

Solution:
const displayCarDetails = (carDetails) => {
  if (carDetails.supportElectricOption) {
    console.log(`Electric cars are the future! The car we are presenting now is called ${carDetails.name}.`)
  };
  
  if(carDetails.countryOfOrigin === "India") {
  console.log(`This car is made in India.`);
  }
  else {
  console.log (`The country of origin is ${carDetails.countryOfOrigin}.`);
  }
  if (carDetails.colour === "black") {
  console.log(`The car's colour is metallic black.`)
  }
  else if (carDetails.colour === "white") {
  console.log(`The car's colour is snow blush.`);
  }
  else {
  console.log(`This car is ${carDetails.colour}.`);
  };
}

3) Calculator:

Write a code to print the result obtained from the calculation of the provided two numbers, based on the provided operator.

The valueOne and valueTwo variables are numbers to which you need to apply the operator variable.
The supported operators are +, -, *, and /.
For anything else received, print Invalid Operator.

Make sure your code is flexible enough to work with any value of the valueOne, valueTwo and operator variable that meets these requirements.

Solution:
const calculateAndLogValue = (valueOne, valueTwo, operator) => {
  switch (operator) {
    case "+":
      result = valueOne + valueTwo;
      break;
    
    case "-":
      result = valueOne - valueTwo;
      break;
    
    case "*":
      result = valueOne * valueTwo;
      break;
    
    case "/":
      result = valueOne / valueTwo;
      break;
      
    default:
      result = `Invalid Operator`;
  }
  console.log(result);
}
