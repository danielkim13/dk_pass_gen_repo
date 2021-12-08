// Pseudocode

// 2.3. based on the selection, result happens and that goes into the for loop
// 3. for loop function for the randomize the password
// 4. connect everything where the password shows on the page or perhaps alert.

// 1. establish global variables of all the possible password character types (capital letter, lower case, number and special character)
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const speChar = ["?", "<", ">", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", "(", ")", "_", "+", "/", ")", ":", "."];
// global variable for user's choice .. use let variable since it will change based on user's input
let userChoice;

// Assignment code here
// 2. write generatePassword function... gonna write the function expression.
const generatePassword = function () {
  // 2.1. prompt - length of password
  userChoice = prompt("How long do your want your password to be? Please choose between 8 and 128");
  // 2.1.1. user need to write value between 8-128 if not continue to call the function so user can get it correctly
  if (userChoice >= 8 && userChoice <= 128) {
    // 2.2. prompt - criteria for password (upper/lower/number/special character) when met the criteria of password length being btwn 8-128, prompt password criteria
    const confirmUpper = confirm("Would you like to have some upper case in your password?");
    const confirmLower = confirm("Would you like to have some lower case in your password?");
    const confirmNum = confirm("Would you like to have some numbers in your password?");
    const confirmSpec = confirm("Would you like to have some special characters in your password?");

    // will come back to if statement for base on the criteria
  } else if (userChoice === null) {
    // if the user click 'cancel' button then just exit out
    return;
  } else if (userChoice === "") {
    // if the user's input is an empty string. possible case is just clicking 'ok' button without writing the value. tell the user to think again.
    alert("Invalid Value. Please try again");
    generatePassword();
  } else {
    // if the input value is other than 8-128 integer than tell the user to think again.
    alert("Invalid value. Please try again");
    generatePassword();
  }
};

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
