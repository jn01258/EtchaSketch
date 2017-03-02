
  var userInput;
  var inputValid= false;
  var i = 0;

  do {
     userInput= prompt("How many squares would you like on each side?","0");
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
      // If invalid entry
     alert("Please enter a number between 1 and 100");


 } else {
   // valid number entered

   inputValid = true;
     }
 } while(!inputValid);

var box = parseInt(userInput);
alert(box+1);
