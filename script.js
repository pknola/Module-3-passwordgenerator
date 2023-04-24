// Assignment code here


function generatePassword(length, includeUppercase, includeNumbers, includeSpecialChar)
{
  var charset = "abcdefghijklmnopqrstuvwxyz";
  var password = ""

  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeNumbers) {
    charset += "0123456789";
  }

  if (includeSpecialChar) {
    charset += "!@#$%^&*()_+={}[]|\\:;\"'<>,.?/";

  }

  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}

function getPasswordCriteria() {
  var length = parseInt(prompt("How many charaters should the password be? (Enter a number between 8 and 128)"));

  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecialChar = confirm("Do you want to include special characters?");

  if (isNaN(length) || length <8 || length > 128) {
    alert("invalid password length, please enter a number between 8 and 128.");
    return getPasswordCriteria();
  }

  return {
    length: length,
    includeUppercase: includeUppercase,
    includeNumbers: includeNumbers,
    includeSpecialChar: includeSpecialChar
  };
  }

  function handleClick() {
    var passwordCriteria = getPasswordCriteria();
    var password = generatePassword(
      passwordCriteria.length,
      passwordCriteria.includeUppercase,
      passwordCriteria.includeNumbers,
      passwordCriteria.includeSpecialChar
      );

      var passwordDisplay = document.getElementById("password");
      passwordDisplay.textContent = password;

    }
    
    //var generateButton = document.getElementByld("generate");
    //generateBtn.addEventListener("click, handleClick");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword(getPasswordCriteria);
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", handleClick);
