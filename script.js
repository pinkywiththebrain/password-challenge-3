// Assignment Code
//Targets the generate id (the button)
var generateBtn = document.querySelector("#generate");

function randomNum(max) {
  return Math.floor(Math.random()* max);
}

function randomItem(list) {
  
  return list[randomNum(list.length)]
}

function generatePassword() {
  //1. Prompt user for password criteria 
  //    a. length between 8 and 128 characters
  //    b. lowercase, uppercase, numbers, and special characters

  //Length Prompt
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

  // The array that will store the chosen arrays
  var selected = []
  

  //Uppercase Prompt
  var upLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var userUpper = window.confirm("Press OK if you want to include uppercase letters.")
    if (userUpper) {
      for (var i = 0; i< upLetters.length; i++){
        selected.push(upLetters[i]);
      }
    } else if (!userUpper) {

    }

  //Lowercase Prompt
  var lowLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  var userLower = window.confirm("Press OK if you want to include lowercase letters.")
    if (userLower) {
      for (var i = 0; i< lowLetters.length; i++){
        selected.push(lowLetters[i]);
      }
    } else if (!userLower) {

    }

  //Numbers Prompt
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]

  var userNum = window.confirm("Press OK if you want to include numbers.")
    if (userNum) {
      for (var i = 0; i< numbers.length; i++){
        selected.push(numbers[i]);
      }
    } else if (!userNum) {

    }

  //Special Characters Prompt
  var specialChars = ["!","@","#","$","%","^","&","*","?"]

  var userChars = window.confirm("Press OK if you want to include special characters.")
    if (userChars) {
      for (var i = 0; i< specialChars.length; i++){
        selected.push(specialChars[i]);
      }
    } else if (!userChars) {

    }


    var generatedPassword = ""


    for (var i = 0; i < userLength; i++) {
      var randomChar = randomItem(selected)
      generatedPassword=generatedPassword+randomChar;
    }
    
  
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
