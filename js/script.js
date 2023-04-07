// Assignment code here
var generateBtn = document.querySelector("#generate");


// Get references to the #generate element
// Character Arrays
  var passwordText = document.querySelector("#password");
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   
  //Variable Declaration
  var confirmLength = "";
  var confirmSpecialCharacter;
  var confirmNumericCharacter;
  var confirmUpperCase;
  var confirmLowerCase;

  //Prompt for password length
  function generatePassword(){
    var confirmLength = (prompt("how many characters would you like your password to contain?"))

  //Loop if answer is outside of parameters
  while (confirmLength <=8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters.");
    var confirmLength = (prompt("How many characters would you like your password to contain?"))
  }

  //Determine parameters of password
  var confirmSpecialCharacter = confirm("Click OK to confirm if you like to include special characters")
  var confirmNumericCharacter = confirm("Click OK to confirm if you like to include numeric characters")
  var confirmUpperCase = confirm("Click OK to confirm if you like to include uppercase characters");
  var confirmLowerCase = confirm("Click OK to confirm if you like to include lowercase characters");

  // Loop if answer is outside th parameters 
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
} 


      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }
    
    console.log(passwordCharacters)
   var randomPassword = ""
      
   for (var i = 0; i < confirmLength; i++) {
     randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
     console.log(randomPassword)
   }
   return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);