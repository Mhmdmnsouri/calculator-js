const userInputElem = document.querySelector('#userInput');
var expression = '';

function press(val) {
    expression += val;
    userInputElem.value = expression;
};

function equal() {
    userInputElem.value = eval(expression);
    expression = '';
};

function erase() {
    expression = '';
    userInputElem.value = expression;
};