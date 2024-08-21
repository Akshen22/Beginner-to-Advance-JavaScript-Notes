1) Parameters & Arguments:
const displayValidationError = (invalidFieldName, additionalMessage) => { // parameters
  const result = `The user ${invalidFieldName} is not valid. ${additionalMessage}`;
  console.log(result);
}

displayValidationError("name", "Please provide a valid name."); // arguments

2) 
