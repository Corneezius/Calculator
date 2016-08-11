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
  $("#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if(operator === "addButton"){
      result= add(number1, number2);
    }
    else if (operator === "subtractButton") {
      result = subtract(number1, number2);
    }
    else if (operator === "multiplyButton") {
      result = multiply(number1, number2);
    }
    else {
      result = divide(number1, number2)
    }
    $("#output").text(result);
  });
});
