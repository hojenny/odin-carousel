var num1 = [],
  num2 = [],
  operand = null;

$(".numpad").click(function() {
  var input = $(this).html();
  if (!operand) {
    num1.push(input);
    $("#screen").html(num1.join(''));
  } else {
    num2.push(input);
    $("#screen").html(num1.join('') + operand + num2.join(''));
  }
  $(this).fadeOut(100).fadeIn(100);
});

$(".operator").click(function() {
  var input = $(this).html();
  setOperand(input);
  $(this).fadeOut(100).fadeIn(100);
})

$('#clear').click(function() {
  num1 = [];
  num2 = [];
  operand = null;
  $("#screen").html(0);
  $(this).fadeOut(100).fadeIn(100);
})

$("#equals").click(function() {
  if (num1 && num2 && operand) {
    var n1 = +num1.join(''),
      n2 = +num2.join(''),
      result = null;
    switch (operand) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
    }
    $("#screen").html(result);
    num1 = [result]; //user can keep hitting 'enter' to continue calculations.
    num2 = [];
    operand = null;
   } 
  $(this).fadeOut(100).fadeIn(100);
});

function setOperand(symbol) {
  if (!operand) {   
    operand = symbol.replace("x", "*").replace("%", "/");
    $("#screen").html(num1.join('') + operand);
  }
}