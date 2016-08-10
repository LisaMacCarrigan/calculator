// Business Logic

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

// User Interface Logic
$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    var operator = $(this).attr("id");
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());

    if(operator==="add"){
      $(".output").text(add(number1,number2));
    }
    else if (operator==="subtract"){
      $(".output").text(subtract(number1,number2));
    }
    else if (operator==="multiply"){
      $(".output").text(multiply(number1,number2));
    }
    else {
      $(".output").text(divide(number1,number2));
    }
  });
});
