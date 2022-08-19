// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {

   var userInput = window.prompt("Yo Fam, How Many Digits You Want In That Password ?")

   var passwordLength = parseInt(userInput)
   
  if (isNaN(passwordLength)) {
    window.alert("That's Not A Number 😒")
    return 
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Your Password Has To Be Between 8 And 128 Characters Smart One. Try Again!")
    return
  }

  var userWantsNumbers = window.confirm("You Wanna Include Some Numbers ?")
  var userWantsSymbols = window.confirm("What About Some Special Characters, AKA Hashtags And Exclamation Points ? ")
  var userWantsLowercase = window.confirm("Any Lowercase Letters ?")
  var userWantsUppercase = window.confirm("What About Uppercase ?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

  var optionsCart = []


  if (userWantsNumbers === true) {
    optionsCart.push(numberList)
  
  




 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);