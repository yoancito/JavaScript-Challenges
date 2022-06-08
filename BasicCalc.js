//
const operator = Prompt("Ingresa el operador: ");
const number1 = parseFloat(Prompt("Número 1 a operar: "));
const number2 = parseFloat(Prompt("Número 2 a operar: "));
let result;

switch (operator) {
    case '+':
        result = number1 + number2;
        console.log(result);
        break;
    case '-':
        result = number1 - number2;
        console.log(result);
        break;
    case '*':
        result = number1 * number2;
        console.log(result);
        break;
    case '/':
        result = number1 / number2;
        console.log(result);
        break;
    default:
        console.log("err");
        break;
}
