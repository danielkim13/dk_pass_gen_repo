// Pseudocode
// 1. establish global variables of all the possible password character types (capital letter, lower case, number and special character)
// 2. write generatePassword function
// 2.1. prompt - length of password
// 2.2. prompt - criteria for password (cap, lower case, number, special character)
// 2.3. based on the selection, result happens and that goes into the for loop
// 3. for loop function for the randomize the password
// 4. connect everything where the password shows on the page or perhaps alert.

// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
