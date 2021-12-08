// Pseudocode

// 2. write generatePassword function
// 2.1. prompt - length of password
// 2.2. prompt - criteria for password (cap, lower case, number, special character)
// 2.3. based on the selection, result happens and that goes into the for loop
// 3. for loop function for the randomize the password
// 4. connect everything where the password shows on the page or perhaps alert.

// 1. establish global variables of all the possible password character types (capital letter, lower case, number and special character)
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const speChar = ["?", "<", ">", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", "(", ")", "_", "+", "/", ")", ":", "."];
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
