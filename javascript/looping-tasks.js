// Question 1
/* 
let num = 0;
for (i=0; i < 11; i++) {
    num += i;
}
console.log("total is : " + num); 
*/

// Question 2
/* 
let num = prompt("Enter a positive number");
for (i=1; i <= 10; i++) {
    let num2;
    num2 = num * i;
    console.log(`${num} * ${i} = ` + num2 );
} 
*/

// Question 3
/* 
let num = prompt("Enter a positive number");
let factorial = 1;
for (i = num; i > 0 ; i--) {
    factorial = factorial * i;
}
console.log(`Factorial of ${num} is ` + factorial ); 
*/

// Question 4
//using for
/* 
let num1 = prompt("Enter a positive number-1");
let num2 = prompt("Enter a positive number-2"); 
let powerof = 1;
for (i=0; i < num2; i++) {
    powerof = powerof * num1;
}
console.log(`power of ${num1} is ${powerof}`); 
*/
//using while
/* 
let num1 = prompt("Enter a positive number-1");
let num2 = prompt("Enter a positive number-2");
let powerof = 1;
while(num2 > 0){
    powerof *= num1;
    num2--;
}
console.log(`power of ${num1} is ${powerof}`);  
*/

//Question 5
/* 
let str = prompt("Enter a word");
let letter = prompt("Enter a letter to find it's count");
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
        count += 1;
    }
}
console.log(`Letter '${letter}' appeared '${count}' times in word ${str}`); 
*/

//Question 6
/* 
let h = prompt("enter height");
let w = prompt("enter width"); 
for (i=0; i < h; i++) {
    for (j=0 ; j < w; j++) {
    // Print # if this is first row or last row. Or this column is first or last.
        // if (i == 0 || i == h-1 || j == 0 || j == w-1) {
            document.write("#");
        // } else {
            // document.write("\xa0");}
    } document.write("<br>");
}
*/

// Question 7
/* 
alert("Please enter PIN, only 3 attempts allowed!!");
let j = 0;
const pin = 5678;
for (i=0; i<3; i++) {
    const input = parseInt(prompt("enter 4-digit pin"));
    if (input === pin ) {
        console.log("Correct, Welcome back.");
        break;
    } else {
        console.log("Incorrect, try again.");
        j++;
    }
    if (j === 3) {
        console.log("Sorry but you have been locked out.");
    }
}
*/

