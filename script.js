/*global $*/

// $(document).ready(function() {

    var calculator = {
        display: [],
        numbers: [],
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
            document.getElementById("clear").onclick = function(position) {
                this.display.splice(position, 1);
                
            }
        },
        clearAll: function() {
            document.getElementById("display").innerHTML = "";
        }
    };

    document.getElementById('zero').onclick = function() {

        calculator.display.push(0);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    },

    document.getElementById('value1').onclick = function() {

        calculator.display.push(1);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value2').onclick = function() {

        calculator.display.push(2);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value3').onclick = function() {

        calculator.display.push(3);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value4').onclick = function() {

        calculator.display.push(4);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value5').onclick = function() {

        calculator.display.push(5);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value6').onclick = function() {

        calculator.display.push(6);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value7').onclick = function() {

        calculator.display.push(7);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    },
    
    document.getElementById('value8').onclick = function() {

        calculator.display.push(8);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    },
     
    document.getElementById('value9').onclick = function() {

        calculator.display.push(9);
        console.log(calculator.display)
        document.getElementById('display').value = calculator.display.join("");
    }

    document.getElementById('plus').onclick = function() {
        document.getElementById("display").value = "+" + calculator.display.join('');
    }



// })