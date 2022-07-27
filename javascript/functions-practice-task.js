// Q.1 WAF which computes the square of a number.
/* function sqr(num) {
    square = num * num;
    console.log(`Square of ${num} is ${square}`)
}
sqr(4); */

// Q.2 WAF to print your name, city, and hobby in a formatted manner.
// Sample Output:
// Name: Akash Das
// City: Bhubaneswar
// Hobby: Giving tasks
/* function format(name, city, hobby) {
    console.log("Name: " + name + "\nCity: " + city + "\nHobby: " + hobby);
}
format("Shubham Kamble", "Nanded", "Drawing"); */

// Q.3 WAF to swap two numbers.
// INPUT: a = 10, b = 13
// OUTPUT: a = 13, b = 10
/* function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(`a = ${a}, b = ${b}`);
}
swap(10, 13); */

// Q.4 WAF to print whether a number is even or odd.
/* function oddEven(n) {
    let result = (n % 2 == 0) ? n + " is an even number" : n + " is an odd number";
    console.log(result);
}
oddEven(2);
oddEven(5); */

// Q.5 Write a JavaScript function that reverses a number.
// Example x = 32245;
// Expected Output: 54223
/* function reverse(num) {
    let rev = 0;
    let lastDigit;
    while(num != 0){
        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num/10);
    }
    console.log("Reverse number : "+rev);
}
reverse(32245); */

// Q.6 Write a JavaScript function that accepts a number as a parameter and checks whether the number is prime or not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
/* let result;
function prime(num) {
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

/* Q.7 Write a JavaScript function that says whether a number is perfect.
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum 
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself 
(also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all
of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, 
and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive 
divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
This is followed by the perfect numbers 496 and 8128. */
/* function perfect(num)
{
let temp = 0;
   for(i=1; i<=num/2; i++) {
         if(num % i === 0)
          {
            temp += i;
          }
     }
     if(temp === num && temp !== 0)
        {
            console.log(`${num} is a Perfect Number`);
        } 
     else
        {
            console.log(`${num} is not a Perfect Number`);
        }   
 } 
perfect(6);
perfect(28);
perfect(25); */

// Q.8 Write a JavaScript function to compute the factors of a positive integer.
/* function factors(n)
{
 let numFactors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   numFactors.push(i);
   if (n / i !== i)
    numFactors.push(n / i);
  }
 numFactors.sort(function(x, y)
   {
     return x - y;
    });  // numeric sort
return numFactors;
}
console.log(factors(10)); */

// Q.9 Write a function to convert Celsius to Fahrenheit.
// Function calFahrenheit() returns the converted Celsius value to Fahrenheit value based on the 
// formula (Celsius × 9/5) + 32 = Fahrenheit.
/* function calFahrenheit(celsius) { 
    return ((celsius * 9/5) + 32); 
}
console.log(calFahrenheit(30)); */

// Q.10 Write a function to check if an input string is a palindrome.
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
/* function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return `${string} is not a palindrome`;
        }
    }
    return `${string} is a palindrome`;
}
console.log(checkPalindrome("shubham"));
console.log(checkPalindrome("madam")); */
