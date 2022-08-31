// Assignment Code
//Targets the generate id (the button)
var generateBtn = document.querySelector("#generate");

function randomNum(min, max) {
  if (!max) {
    max - min
    min - 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
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
  console.log(selected)

  //Uppercase Prompt
  var upLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var userUpper = window.confirm("Press OK if you want to include uppercase letters.")
    if (userUpper) {
      selected.push(upLetters);
    } else if (!userUpper) {

    }

  //Lowercase Prompt
  var lowLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  var userLower = window.confirm("Press OK if you want to include lowercase letters.")
    if (userLower) {
      selected.push(lowLetters);
    } else if (!userLower) {

    }

  //Numbers Prompt
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]

  var userNum = window.confirm("Press OK if you want to include numbers.")
    if (userNum) {
      selected.push(numbers);
    } else if (!userNum) {

    }

  //Special Characters Prompt
  var specialChars = ["!","@","#","$","%","^","&","*","?"]

  var userChars = window.confirm("Press OK if you want to include special characters.")
    if (userChars) {
      selected.push(specialChars);
    } else if (!userChars) {

    }


    var generatedPassword = ""

    for (var i = 0; i < userLength; i++) {
      var randomList = randomItem(selected)
      var randomChar = randomItem(randomList)
      console.log(randomChar)
    }

    
  
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
