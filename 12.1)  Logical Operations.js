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

OR Table:
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

2) AND:

Using your knowledge of conditionals, try solving the challenge described below. Try not to scroll down or take a peek at the solution.
We have grade and internship status of a student.
The student will get a discount of 3000 on their course fee if the following conditions are met:
Student have scored 75 or above.
Student has done an internship.
Write a program such that even if one of the conditions does not evaluate to true, the student does not get the discount and log to the console Your course fee is: [courseFee]. 
or else log Your course fee after discount is: [discountedFee].

Solution:
const courseFee = 10000;
const courseDiscountAmount = 3000;
const student = { 
  marks: 78,
  internshipDone: true
};

const discountedFee = courseFee - courseDiscountAmount;

if (student.marks >= 75 && student.internshipDone === true) {
  console.log(`Your course fee after discount is: ${discountedFee}.`)
}

else {
  console.log (`Your course fee is: ${courseFee}.`)
}

AND Table:
student.marks >= 75	student.internshipDone	Result
true	              true	                  true
true	              false	                  false
false	              true	                  false
false	              false	                  false

3) AND Challenge:
You are working on a user management system for an online platform.
You have a user object representing a user in the system. The user object contains properties such as name, login status, role, plan, and fullAdminPackage. 
Your task is to write code that checks the user's login status, role, plan, and fullAdminPackage to determine the access level to the admin panel.

Check if the user is logged in using the isLogged property. If the user is logged in, log to the console: "User has logged in."
Based on the user's role, plan, and fullAdminPackage, log the appropriate message regarding access to the admin panel:
If the user's role is Admin and they are on the Premium plan, log: "Displaying the Admin Panel with all the admin features."
If the user's role is Admin, they are on the Plus plan, and have the fullAdminPackage set to true, log: "Displaying the Admin Panel with all the admin features."
If the user's role is Admin, they are on the Plus plan, but do not have the fullAdminPackage set to true, log: "Displaying the Admin Panel with only the Plus plan admin features."
If the user's role is Admin and they are on the Free plan, log: "Displaying the Admin Panel with limited admin features."
If the user's role is Standard, log: "Access denied."
Use the provided user object for this challenge.

Solutions:
const user = {
  name: "Sam",
  isLogged: true,
  role: "Admin",
  plan: "Premium",
  fullAdminPackage: true,
};

if (user.isLogged === true) {
  console.log(`User has logged in.`)
};

if (user.role === "Admin") {
  if (user.plan === "Premium") {
  console.log(`Displaying the Admin Panel with all the admin features.`);
} else if (user.plan === "Plus" && user.fullAdminPackage === true) {
  console.log(`Displaying the Admin Panel with all the admin features.`);
} else if (user.plan === "Plus" && user.fullAdminPackage === false) {
  console.log("Displaying the Admin Panel with only the plus with limited admin features.");
} else if (user.plan === "Free") {
  console.log(`Displaying the Admin Panel with limited admin features.`);
} else {
  console.log("Access denied");
}
}

else {
  console.log("Please log in to access the admin panel.")
}
