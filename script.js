
var handlers = {
    add: function() {
        var operatorInput = document.getElementById('operatorInput');
        operatorInput.value = '+';
       
  },

    subtract: function() {
        var operatorInput = document.getElementById('operatorInput');
        operatorInput.value = '-';
        
  },
  
    multiply: function() {
        var operatorInput = document.getElementById('operatorInput');
        operatorInput.value = 'x';
        
  },
  
    divide: function() {
        var operatorInput = document.getElementById('operatorInput');
        operatorInput.value = '/';
        
  },
  
  clearDisplay: function() {
            var display = document.getElementById('display');
            display.value = '0';
            storedNum = '0';
            calculationFinished = true;
            operation = operations.none;
            operatorInput.value = '';
        } 
  
};
 var operations = {
    /* no-op. Takes the right side, and just returns it.  Since the right side is the
    display value, and calculate() sets display.value, this effectively makes
    calculate() say "display.value = +display.value".*/
    none:     function(left, right) { return right; },

    // Math operations.
    add:      function(left, right) { return left + right; },
    subtract: function(left, right) { return left - right; },
    multiply: function(left, right) { return left * right; },
    divide:   function(left, right) { return left / right; }
};

    document.getElementById('zero').onclick = function() {

        calculator.display.push(0);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    },

    document.getElementById('value1').onclick = function() {

        calculator.display.push(1);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value2').onclick = function() {

        calculator.display.push(2);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value3').onclick = function() {

        calculator.display.push(3);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value4').onclick = function() {

        calculator.display.push(4);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value5').onclick = function() {

        calculator.display.push(5);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value6').onclick = function() {

        calculator.display.push(6);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value7').onclick = function() {

        calculator.display.push(7);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value8').onclick = function() {

        calculator.display.push(8);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    },
     
    document.getElementById('value9').onclick = function() {

        calculator.display.push(9);
        console.log(calculator.display);
        document.getElementById('display').value = calculator.display.join("");
    };

    
var view = {
  display: function() {
    var display = document.querySelector('display');
    calculator.display.value = '';
    var operatorInput = document.getElementById('operatorInput');
    calculator.display.forEach(function(num, position) {
      var num1 = [];
      var num2 = [];

      if (operatorInput === true) {
        num2.push(calculator.display.value);
      } else {
        num1.push(calculator.display.value);
      }
  
    }, this);
}
}

