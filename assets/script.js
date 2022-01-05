// Assignment code here

// Create Arrays
var upper = ["A", "B" ,"C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0"]
var symbol = ["!", "@" ,"#", "$", "%", "^", "&", "*", "_", "+", "-", "~"]

function generatePassword () {
// Confirm how many and what type of characters will be used in password
var length = prompt ("How long would you like your password? (must be between 8 - 128 characters")
console.log (length) 
// if a number outside of the parameter is choosen
while (length < 8 || length > 128) {
    window.alert ("Try again! Please choose a number between 8 and 128.");
    // Ask again
    var length = prompt ("How long would you like your password? (must be between 8 - 128 characters");
    console.log (length)
}
var uppercase = confirm ( "Would you like to use uppercase letters in this password?")
    console.log (uppercase)
var lowercase = confirm ("Would you like to use lowercase letters in this password?")
    console.log (lowercase)
var numbers = confirm ("Would you like to use numbers in this password?")
    console.log (numbers)
var symbols = confirm ("Would you like to use symbols in this password?")
    console.log (symbols)
// if not parameter is choosen
while (uppercase === false && lowercase === false && numbers === false && symbols === false) {
    window.alert ("Error! You must choose from at least 1 parameter. Try Again.")
    // Ask again
    var uppercase = confirm ( "Would you like to use uppercase letters in this password?")
        console.log (uppercase)
    var lowercase = confirm ("Would you like to use lowercase letters in this password?")
        console.log (lowercase)
    var numbers = confirm ("Would you like to use numbers in this password?")
        console.log (numbers)
    var symbols = confirm ("Would you like to use symbols in this password?")
        console.log (symbols)
}

}

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