// Assignment Code
//Targets the generate id (the button)
var generateBtn = document.querySelector("#generate");


//Picks random number
function randomNum(max) {
  return Math.floor(Math.random()* max);
}

//Picks randomly from each list
function randomItem(list) {
  return list[randomNum(list.length)]
}

function generatePassword() {
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
    } 

  //Lowercase Prompt
  var lowLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  var userLower = window.confirm("Press OK if you want to include lowercase letters.")
    if (userLower) {
      for (var i = 0; i< lowLetters.length; i++){
        selected.push(lowLetters[i]);
      }
    } 

  //Numbers Prompt
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]

  var userNum = window.confirm("Press OK if you want to include numbers.")
    if (userNum) {
      for (var i = 0; i< numbers.length; i++){
        selected.push(numbers[i]);
      }
    } 

  //Special Characters Prompt
  var specialChars = ["!","@","#","$","%","^","&","*","?"]

  var userChars = window.confirm("Press OK if you want to include special characters.")
    if (userChars) {
      for (var i = 0; i< specialChars.length; i++){
        selected.push(specialChars[i]);
      }
    } 


  //If no option is chosen
    if (!userChars && !userNum && !userLower && !userUpper) {
      alert("You must choose at least one option. Please try again.")
      return generatePassword();
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
