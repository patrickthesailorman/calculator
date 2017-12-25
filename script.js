var operatorInput;
var display;
var calculationFinished;
var operation;
var storedNum;

var handlers = {
    add: function() {
        operatorInput = document.getElementById('operatorInput');
        operatorInput.value = '+';
    },

    subtract: function() {
        operatorInput = document.getElementById('operatorInput');
        operatorInput.value = '-';
    },
  
    multiply: function() {
        operatorInput = document.getElementById('operatorInput');
        operatorInput.value = 'x';
    },
  
    divide: function() {
        operatorInput = document.getElementById('operatorInput');
        operatorInput.value = '/';
    },
  
    equals: function() {
        operatorInput = document.getElementById('operatorInput');
        operatorInput.value = '=';
    }
};
function clearDisplay() {
            display = document.getElementById('display');
            display.value = '0';
            storedNum = '0';
            calculationFinished = true;
            operation = operations.none;
            operatorInput.value = '';
        } 
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

function clearPreviousResult() {
    display = document.getElementById('display');
    if (calculationFinished) {
        display.value = '0';
        calculationFinished = false;
    }
}

function numInput(digit) {
    var display = document.getElementById('display');
    clearPreviousResult();
    /*Get rid of a 0 if it's the only thing in there.
    This lets you enter a 0 and have it show up
    and leaves a 0 for the decimal point. */
    if (display.value === '0') display.value = '';
    display.value += digit;
}

function setOperation(command) {
    var display = document.getElementById('display');
    calculate();
    storedNum = display.value;
    if (operations.hasOwnProperty(command))
        operation = operations[command];
}

function calculate() {
    display = document.getElementById('display');
    display.value = operation(+storedNum, +display.value);
    calculationFinished = true;
    operation = operations.none;
}

function insertDecimal() {
    var display = document.getElementById('display');
    clearPreviousResult();
    if (display.value.indexOf('.') === -1) display.value += '.';
}

if ('addEventListener' in window)
    window.addEventListener('load', clearDisplay);
else
    window.attachEvent('onload', clearDisplay);

