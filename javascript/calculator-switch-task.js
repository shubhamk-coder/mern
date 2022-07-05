alert("1. Addition\xa0 2. Subtraction\xa0 3. Multiplication\xa0 4. Division\xa0 5. Quit");
let option = prompt("choose an option [1-5]");
let num1, num2, result;
switch (option) {
    case ("1") :
        num1 =   parseInt(prompt("Enter first number"));
        num2 =   parseInt(prompt("Enter second number"));
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case ("2") :
        num1 =   parseInt(prompt("Enter first number"));
        num2 =   parseInt(prompt("Enter second number"));
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case ("3") :
        num1 =   parseInt(prompt("Enter first number"));
        num2 =   parseInt(prompt("Enter second number"));
        result = num1 * num2;
        console.log(`${num1} x ${num2} = ${result}`);
        break;
    case ("4") :
        num1 =   parseInt(prompt("Enter first number"));
        num2 =   parseInt(prompt("Enter second number"));
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;
    case ("5") :
        alert("Good Bye!")
        break;
    default :
        alert("please enter correct input value");
}