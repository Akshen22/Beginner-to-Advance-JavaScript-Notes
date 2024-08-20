1) Array methods and Conditionals Part 1:

Create a list containing these 5 players from team A.

Eve Smith
Sam Smith
Renu Sen
Lao Xun
Linh Tran
Assign this value to a variable named playerList and its value should be an appropriate datatype of your choice.

Remove last name from the above list and replace it with Chinua Achebe and log the resulting list to the console.

Solution:
let playerList = ["Eve Smith", "Sam Smith", "Renu Sen", "Lao Xun", "Linh Tran"];
playerList.pop();
playerList.push("Chinua Achebe");
console.log(playerList);

2) Array methods and Conditionals Part 2:

Create a list with these 5 movies from the Marvel franchise.

  Iron Man
  Thor
  Black Widow
  Captain Marvel
  Guardians of the Galaxy Vol. 1
Use an appropriate datatype of your choice.
Assign this value to a variable that is properly named.
Make sure they are added in the alphabetical order.
Log the second movie from the list to the console.

Solution 1:
const movie = ["Black Widow", "Captain Marvel", "Guardians of the Galaxy Vol. 1", "Iron Man", "Thor"];

console.log(movie[1]);

Solution 2:
let marvelMovies = ["Iron Man", "Thor", "Black Widow", "Captain Marvel", "Guardians of the Galaxy Vol. 1"].sort();

console.log(marvelMovies[1]);

3) Array methods and Conditionals Part 3:

You are provided with a list of movies.
Log to the console, the total number of movies mentioned in the list.
Add a new movie "Vichithram" at the end of the list.
Log to the console in the following format:
My favorite movie from the list above is Drishyam.
Note: Do not hardcode the movie name in the sentence.

Solution:
let malayalamMovies = ['Kumbalangi Nights', 'Koodi', 'Drishyam','Vettam', 'Lucifer', 'Uyare', 'Premam', 'Maheshinte Prathikaram', 'Bangalore Days', 'Charlie', 'Ayyappanum Koshiyum', 'Njan Prakashan'];

console.log("Total number of movies:", malayalamMovies.length);

malayalamMovies.push('Vichithram');

console.log("Total number of movies after addition:", malayalamMovies.length);

let favoriteMovie = malayalamMovies[2];
console.log(`My favorite movie from the list above is ${favoriteMovie}.`);
