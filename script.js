// Assignment Code
//Targets the generate id (the button)
var generateBtn = document.querySelector("#generate");

function generatePassword(userLength) {
  //1. Prompt user for password criteria 
  //    a. length between 8 and 128 characters
  //    b. lowercase, uppercase, numbers, and special characters

  //Length
  var userLength = window.prompt("How long would you like your password to be? (Please choose between 8 and 128 characters)");

  if (isNaN(userLength)) {
    alert("Invalid input. Please try again.");
    return;
  }
 else if (userLength < 8 || userLength > 128) {
    alert("Invalid input. Please try again.");
    return;
  }

console.log(userLength)

  //Uppercase
  var upLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var userUpper = window.confirm("Press OK if you want to include uppercase letters.")
    if (userUpper) {
      
    } else if (!userUpper) {

    }

  //Lowercase
  var lowLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  var userLower = window.confirm("Press OK if you want to include lowercase letters.")
    if (userLower) {

    } else if (!userLower) {

    }

//Numbers
var numbers = ["0","1","2","3","4","5","6","7","8","9"]

  var userNum = window.confirm("Press OK if you want to include numbers.")
    if (userNum) {
      
    } else if (!userNum) {

    }

//Special Characters
  var specialChars = ["!","@","#","$","%","^","&","*","?"]

  var userChars = window.confirm("Press OK if you want to include special characters.")
    if (userChars) {
      
    } else if (!userChars) {

    }

  //2. Validate input


  //3. Generate password based on criteria
//  var index = 
//  var password = options[index];

  //4. Display generate pw on page
  return
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
