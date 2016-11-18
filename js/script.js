var calculation = "";
var inputs = [];

$("button").click(function() {

  var number = $(this).html();

  if(number === "=") {

    inputs = calculation.split(" ");
    calculation = "";

    var numOne;
    var numTwo;
    var symbol;
    for(var i = 0; 1 < inputs.length; i ++) {

    }

  } else {
    calculation = calculation + " " + number;
  }

 $("input").val(calculation);

});
