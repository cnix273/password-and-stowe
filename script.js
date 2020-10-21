// Assignment Code
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberic = ["1","2","3","4","5","6","7","8","9"]
var special = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","?","@","[","\\","]","^","_","`","{","|","}","~"]

function generatePassword() {
  // Selecting password length
    
    while (length < 8 || length > 128) {  
        var lengthString = prompt("How long would you like your password to be? (must be between 8 and 128 characters)");
        var length = parseInt(lengthString);

        if (length < 8) {
        alert("Requested password length is too short. Please try again.")
        }

        if (length > 128) {
        alert("Requested password length is too long. Please try again.")
        }
    }

  // Selecting types of characters
    while (lowercaseConfirm !== true && uppercaseConfirm!== true && numericConfirm !== true && specialConfirm !== true) {
        var lowercaseConfirm = confirm("Would you like it to include lowercase characters?");
        var uppercaseConfirm = confirm("Would you like it to include uppercase characters?")
        var numericConfirm = confirm("Would you like it to include numeric characters?");
        var specialConfirm = confirm("Would you like it to include special characters?");

        //Validation of whether at least one character type is selected
        if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialConfirm ===false) {
            alert ("You must select at least one character type.");
        }
    }

    if (lowercaseConfirm) {
        var password = password.concat(lowercase);
    }
        
    if (uppercaseConfirm) {
        password = password.concat(uppercase);
    }
        
    if (numericConfirm) {
        password = password.concat(numberic);
    }
        
    if (specialConfirm) {
        password = password.concat(special);
    }

    var passwordArray;
    for (i = 0; i < length; i++) {
        passwordText[i] = password[Math.floor(Math.random() * length)];
    }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
