1) OR:

Example 1:
const guest = {
  role: "volunteer"
};

if (guest.role==="faculty" || guest.role==="volunteer") {
  console.log(`Access granted`);
}

else {
  console.log(`Access denied`);
}

guest.role === "faculty"	guest.role === "volunteer"	Result
true	                    true	                      true
true	                    false	                      true
false	                    true	                      true
false	                    false	                      false

Example 2:
const student = {
  nationality: "Japan"
};
const courseFee = 1000;

if (student.grade === null || student.grade === undefined) {
  console.log("Student grade must be provided");
} else {
  console.log(`Your course fee is: ${courseFee}.`);
}

/*Since we do not have a grade key in the student object, the student value.the grade will be undefined, 
and therefore we get the output "Student grade must be provided".
We would get the same output if the value of the student. grade variable was null.*/

Example 3:
In the code below, if the user is an admin or a moderator, log to the console: [User name] has special privileges.
If not, log to the console: [User name] has standard privileges.

Solution:
const user = {
  name: "Sam",
  isAdmin: false,
  isModerator: false
};

if (user.isAdmin === true || user.isModerator === true) {
  console.log(`${user.name} has special privileges.`);
}

else {
  console.log(`${user.name} has standard privileges.`)
}

2) 
