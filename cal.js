const num1 = Number(prompt('Enter the first number:'));
const operator = prompt('Enter an operator(+, -, * or /)');
const num2 = Number(prompt('Enter the second number:'));

let result;

if (operator == '+'){
    result = num1 + num2;
}
else if (operator == '-'){
    result = num1 - num2;
}
else if (operator == '*'){
    result = num1 * num2;
}
else if (operator == '/'){
    result = num1 / num2;
}

window.alert('The result of ' + num1 + operator + num2 + ' is: ' + result );
