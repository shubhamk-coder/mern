/* Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values */

// Question-1
function Calculator()
{
   this.read=function()
   {
this.num1=+prompt("Enter the First number");
this.num2=+prompt("Enter the second number");
   };
   this.sum=function()
   {
    return this.num1 + this.num2;
   };
   this.mul=function()
   {
    return this.num1*this.num2;
   };
}
let calculate = new Calculator();
calculate.read();
alert( "Sum is " + calculate.sum() + " & Multiplication is " + calculate.mul() );

// Question-2
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("Enter the new number");
  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);