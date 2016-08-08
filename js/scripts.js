var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter your first number:"));
var number2 = parseInt(prompt("Enter your second number:"));
var result = add(number1, number2);
alert(result);

/*
var remainder = function() {
	var number1 = prompt("Your first integer, sir?");
  var number2 = prompt("Your second integer, sir?");

  number1 = parseInt(number1);
  number2 = parseInt(number2);

 	var divisionresult = (number1 / number2);
 	var parsedresult = parseInt(divisionresult);
  var multiresult = (parsedresult * number2);
 	var result = (number1 - multiresult);
  alert("The remainder of " + number1 +" and " + number2 + " is " + result);

}
*/

var subtract = function(number1, number2) {
  return number1 - number2;
}

var multiply = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2) {
  return number1 / number2;
}

remainder();
