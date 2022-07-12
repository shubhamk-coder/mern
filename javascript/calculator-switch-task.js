console.log("Welcome to the best calculator out there!");
let continueAgain = false;
loop: do {
    console.log("Choose the operation to be performed::");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Quit");
    console.log("Enter choice to continue...");
    let option = parseInt(prompt("choose an option [1-5]"));
    console.log("Enter two numbers for the calculation...");
    let num1, num2, result;
    switch (option) {
        case 1 :
            num1 =   parseInt(prompt("Enter first number"));
            num2 =   parseInt(prompt("Enter second number"));
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case 2 :
        num1 =   parseInt(prompt("Enter first number"));
        num2 =   parseInt(prompt("Enter second number"));
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
        case 3 :
            num1 =   parseInt(prompt("Enter first number"));
            num2 =   parseInt(prompt("Enter second number"));
            result = num1 * num2;
            console.log(`${num1} x ${num2} = ${result}`);
            break;
        case 4 :
            num1 =   parseInt(prompt("Enter first number"));
            num2 =   parseInt(prompt("Enter second number"));
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result}`);
            break;
        case 5 :
            alert("Good Bye!")
            break;
        default :
            alert("please enter correct input value");
    }
    console.log("Choose whether to continue...");
    continueAgain = confirm("Do you want to continue?");
    } while (continueAgain);
    alert("Goodbye.");