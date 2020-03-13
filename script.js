// Assignment Code
console.log("hello")

var generateBtn = document.querySelector("#generate");

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordChar = []
  var password = ("")
  var passwordLength = 0


  while (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    var passwordLength = prompt("How many characters should your password be?");
    if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
      alert("Your password should be between 8-128 characters")
    }}

  while (passwordChar.length <= 0) {
  var uppercaseChar = confirm("Should the password have uppercase characters?");
    if (uppercaseChar === true) {
      passwordChar = passwordChar.concat(upper);
    }
  var lowercaseChar = confirm("Should the password have lowercase characters?");
    if (lowercaseChar === true) {
      passwordChar = passwordChar.concat(lower);
    }
  var numericChar = confirm("Should the password have numeric characters?");
    if (numericChar === true) {
      passwordChar = passwordChar.concat(numeric);
    }
  var specialChar = confirm("Should the password have special characters?");
    if (specialChar === true) {
      passwordChar = passwordChar.concat(special);
    }
  if (passwordChar.length <= 0) {
    alert("Please choose one of the criterias given...")
  }}

  for(i = 0; i < passwordLength; i++) {
    var pwdIndex = Math.floor(Math.random() * passwordChar.length)
    console.log(pwdIndex)
    password = password.concat(passwordChar[pwdIndex])
  }
  
  return password;

}