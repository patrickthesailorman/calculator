/*global $*/

// $(document).ready(function() {

    var calculator = {
        display: [],
        numbers: [],
        add: function(num1, num2) {
            var sum = num1 + num2;
            this.display.value = sum
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
        clear: function(position) {
            this.display.splice(position, 1);
        },
        
        clearAll: function() {
            document.getElementById("display").innerHTML = "";
        }
    };
var num1 = [];
var num2 = [];
var handlers = {
    add: function() {
    var operatorInput = document.getElementById('operatorInput');
    document.getElementById('display');
    num1.push(parseInt(calculator.display.value));
    calculator.add(parseInt(calculator.display.value));
    operatorInput.value = '+';
    view.display();
  },

    subtract: function() {
    var operatorInput = document.getElementById('operatorInput');
    num1.push(parseInt(calculator.display.value));
    calculator.subtract(parseInt(calculator.display.value));
    operatorInput.value = '-';
    view.calculator.display();
  },
  
    multiply: function() {
    var operatorInput = document.getElementById('operatorInput');
    num1.push(parseInt(calculator.display.value));
    calculator.multiply(parseInt(calculator.display.value));
    operatorInput.value = 'x';
    view.calculator.display();
  },
  
    divide: function() {
    var operatorInput = document.getElementById('operatorInput');
    num1.push(parseInt(calculator.display.value));
    calculator.divide(parseInt(calculator.display.value));
    operatorInput.value = '/';
    view.calculator.display();
  },
  
    equals: function() {
    
    var operatorInput = document.getElementById('operatorInput');
    num2.push(parseInt(calculator.display.value));
    if(operatorInput.value === '+') {
        calculator.add(num1, num2);
    } else if(operatorInput.value === '-') {
        calculator.subtract(num1, num2);
    } else if(operatorInput.value === 'x') {
        calculator.multiply(num1, num2);
    } else if(operatorInput.value === '/') {
        calculator.divide(num1, num2);
    } else {
        calculator.display.value;
    }
    operatorInput.value = '=';
    view.display();
  },
  
    clear: function(position) {
    calculator.display.clear(position);
    view.display();
  },
  
};

    document.getElementById("clear").onclick = function(position) {
        var display = document.getElementById("display").innerHTML;
        calculator.display.splice(calculator.display.length-1, 1);
        console.log(calculator.display[calculator.display.length-1]);
        display = calculator.display.value;
    },

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

    // document.getElementById('plus').onclick = function() {
    //     var display = document.getElementById("display").value;
    //     console.log(display);
    //     var runningTotal = 0;
    //     for (var i =0; i < display.length; i++) {
    //         console.log(display[i]);
    //         runningTotal = runningTotal + parseInt(display[i]);
    //     }
    //     console.log(runningTotal);
    //     document.getElementById("display").innerHTML = runningTotal;
    // },
    
    // document.getElementById("equlas").onclick = function() {
    //     var display = document.getElementById("display").innerHTML;
    //     var runningTotal = 0;
    //     for (var i =0; i < display.length; i++) {
    //         console.log(display[i]);
    //         runningTotal = runningTotal + parseInt(display[i]);
    // }
    // }
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
      
    //   todoLi.id = position;
    //   todoLi.textContent = todoTextWithCompletion;
    //   todoLi.appendChild(this.createDeleteButton());
    //   todosUl.appendChild(todoLi);
    }, this);
}
}

