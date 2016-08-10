// Backend Logic
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//UI Logic

$(document).ready(function() {
  $("#addButton").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());

    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("#subtractButton").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());

    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("#multiplyButton").click(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());

    var result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("#divideButton").click(function(event){
    console.log("divideButton")
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());

    var result = divide(number1, number2);
    $("#output").text("= " + result);
  });
});
