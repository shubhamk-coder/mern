// Question 1
/* let day = parseInt(prompt("Enter day number of the week"));
switch(day) {
    case (1) :
        alert("Monday");
        break;
    case (2) :
        alert("Tuesday");
        break;
    case (3) :
        alert("Wednesday");
        break;
    case (4) :
        alert("Thursday");
        break;
    case (5) :
        alert("Friday");
        break;
    case (6) :
        alert("Saturday");
        break;
    case (7) :
        alert("Sunday");
        break;
    default:
        alert("you've enterend wrong number");
} */

// Question 2
/* let physics = parseInt(prompt("Enter Physics marks"));
let chemistry = parseInt(prompt("Enter chemistry marks"));
let mathematics = parseInt(prompt("Enter mathematics marks"));
let biology = parseInt(prompt("Enter biology marks"));
let computer = parseInt(prompt("Enter computer marks"));
let percentage = (physics + chemistry + mathematics + biology + computer) / 500 * 100;
console.log(" percentage is " + percentage +"%");
switch(true) {
    case (percentage>=90):
        alert("Grade A");
        break;
    case (percentage>=80):
        alert("Grade B");
        break;
    case (percentage>=70):
        alert("Grade C");
        break;
    case (percentage>=60):
        alert("Grade D");
        break;
    case (percentage>=40):
        alert("Grade E");
        break;
    case (percentage<40):
        alert("Grade F");
        break;
    default:
        alert("you've enterend wrong marks");
} */

// Question 3
/* let char = prompt("enter any character");
switch(true) {
    case (char >= "A" && char <= "Z") :
        console.log(`${char} is in Uppercase`);
        break;
    case (char >= "a" && char <= "z") :
        console.log(`${char} is in Lowercase`);
        break;
    default :
    console.log("wrong input char");
} */

// Question 4
/* let num = parseInt(prompt("Enter any number"));
switch (true) {
    case (num % 2 === 0 ) :
        console.log(`${num} is even number`);
        break;
    case (num % 2 != 0) :
        console.log(`${num} is odd number`);
        break;
    default:
        console.log("Please enter valid input number");
} */

// Question 5
/* let root1, root2;
let a = prompt("Enter value of 'a' of quadratic equation (aX^2 + bX + c):");
let b = prompt("Enter value of 'b' of quadratic equation (aX^2 + bX + c):");
let c = prompt("Enter value of 'c' of quadratic equation (aX^2 + bX + c):");
let discriminant = b * b - 4 * a * c;
switch(true) {
    case (discriminant > 0) :
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
        break;
    case (discriminant == 0) :
        root1 = root2 = -b / (2 * a);
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
        break;
    case (discriminant == 0) :
        root1 = root2 = -b / (2 * a);
        console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
        break;
    default :
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
} */