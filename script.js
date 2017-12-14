/*global $*/

$(document).ready(function() {
    
    var calculator = {
        display: [],
        numbers: {
        },
     add: function(num1, num2) {
         var sum = num1 + num2;
         document.getElementById("display").innerHTML = sum;
     },
     subtract: function(num1, num2) {
         var sum = num1 - num2;
         document.getElementById("display").innerHTML = sum;
     },
     multiply: function(num1, num2) {
         var sum = num1 * num2;
         document.getElementById("display").innerHTML = sum;
     },
     divide: function(num1, num2) {
         var sum = num1 / num2;
         document.getElementById("display").innerHTML = sum;
     },
    //  equals: function() {
    //      var sum = num1(operator)num2;
    //      document.getElementById("display").innerHTML = sum;
    //  },
     clear: function() {
         document.getElementById("display").innerHTML = "";
     },
     clearAll: function() {
         document.getElementById("display").innerHTML = "";
     },
}

document.getElementById('value1').onclick = function() {
    document.getElementById("display").value = 1;
    calculator.display.push.value;
}

document.getElementById('plus').onclick = function() {
    document.getElementById("display").value = "display".value && "+";
}

})