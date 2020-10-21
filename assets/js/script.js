// Assignment Code

// Defines arrays for each character type containing those characters
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numeric = ["1","2","3","4","5","6","7","8","9"]
var special = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","?","@","[","\\","]","^","_","`","{","|","}","~"]

function generatePassword() {
    // Defines password length variable
    var lengthString = 0;
    var length = parseInt(lengthString);

    while (length < 8 || length > 128) {
        // Prompts user to enter password length and convert string to an integer
        lengthString = prompt("How long would you like your password to be? (must be between 8 and 128 characters)");
        length = parseInt(lengthString);

        // Alerts user if password is too short
        if (length < 8) {
        alert("Requested password length is too short. Please try again.")
        }

        // Alerts user if password is too long
        if (length > 128) {
        alert("Requested password length is too long. Please try again.")
        }
    }

    // Prompts user to confirm what character types to include
    while (lowercaseConfirm !== true && uppercaseConfirm!== true && numericConfirm !== true && specialConfirm !== true) {
        var lowercaseConfirm = confirm("Would you like it to include lowercase characters?");
        var uppercaseConfirm = confirm("Would you like it to include uppercase characters?")
        var numericConfirm = confirm("Would you like it to include numeric characters?");
        var specialConfirm = confirm("Would you like it to include special characters?");

        //Validate that at least one character type is selected
        if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialConfirm ===false) {
            alert ("You must select at least one character type.");
        }
    }

    // Defines variable password
    var password = "";

    // Adds chosen character types to string until password is equal to chosen password length
    while (password.length < length) {

        if (lowercaseConfirm == true && password.length < length) {
            password += lowercase[Math.floor(Math.random() * lowercase.length)];
        }
   
        if (uppercaseConfirm == true && password.length < length) {
            password += uppercase[Math.floor(Math.random() * uppercase.length)];
        }
    
        if (numericConfirm == true && password.length < length) {
            password += numeric[Math.floor(Math.random() * numeric.length)];
        }
   
        if (specialConfirm == true && password.length < length) {
            password += special[Math.floor(Math.random() * special.length)];
        }
    }

    // Returns variable password when function is called
    return password;
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
