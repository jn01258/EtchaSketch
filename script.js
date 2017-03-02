$(document).ready(function(){
  var userInput= prompt("How many squares would you like on each side?");
// If x is Not a Number or less than one or greater than 10
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
     prompt("Please enter a number between 1 and 100");
 } else {
   text = "valid";
     }
     document.getElementById("demo").innerHTML = text;

 });
