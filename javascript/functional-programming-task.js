/* 1. WAF which computes the square of a number.

2. WAF to print whether a number is even or odd.

3. Write a JavaScript function that accepts a number as a parameter and checks whether the number is prime or not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

4. Write a function to convert Celsius to Fahrenheit.
Function calFahrenheit() returns the converted Celsius value to Fahrenheit value based on the formula (Celsius × 9/5) + 32 = Fahrenheit.

5. WAF which prints if a year is leap year or not. */

// Question-1
/* let sqr = (a) => a * a;
console.log(sqr(4)); */

// Question-2
/* let evenOdd = (n) => {
    if (n % 2 == 0) {
        console.log(`${n} is a even number`);
    } else {
        console.log(`${n} is a odd number`);
    }
}
evenOdd(2);
evenOdd(3); */

// Question-3
/* let result;
let prime = (num) => {
    check : for (i = 2; i < num; i++) {
            result = num % i;
        if (result == 0) {
            console.log(`${num} is not a prime number`);
            break check;
        }
    } if (num == 1) {
        console.log(`${num} is neither prime nor composite number`);
    } else if (result != 0) {
        console.log(`${num} is a prime number`);
    } 
}
prime(3);
prime(4);
prime(1); */

// Question-4
/* let calFahrenheit = (celsius) => { return ((celsius * 9/5) + 32); }
console.log(calFahrenheit(30)); */

// Question-5
/* let leapYear = (year) => { result = year % 4 ; 
let isLeapYear = (result == 0) ? year + " is a leap year" : year + " is not a leap year";
console.log(isLeapYear); }
leapYear(2020);
leapYear(2021); */
