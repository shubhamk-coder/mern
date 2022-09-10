// Question - 1
// Create a function addTwo that accepts one input and adds 2 to it.

/* addTwo = (num) => {
  return num + 2;
};
console.log(addTwo(3));
console.log(addTwo(10));
 */

// Question - 2
// Create a function addS that accepts one input and adds an "s" to it.
/* 
addS = (word) => {
  return word + "s";
};
console.log(addS("pizza"));
console.log(addS("bagel"));
 */

// Question - 3
/* Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.*/

/* map = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}
console.log(map([1, 2, 3], addTwo)); */

// Question - 4
//The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

/* forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet); */

// Question - 5
//Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined. Call this new function mapWith.

/* mapWith = (array, callback) => {
  const newArr = [];
  forEach(array, (item) => {
    newArr.push(callback(item));
  });
  return newArr;
}
console.log(mapWith([1, 2, 3], addTwo)); */

// Question - 6
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs.

/* intersection = (...arrays) => {
  return arrays.reduce((a, array) => {
    return array.filter((item) => a.includes(item));
  });
};
console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
); */
