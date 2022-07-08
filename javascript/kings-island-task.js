// version 1
/* let age = parseInt(prompt("What is your age?"));
let basePrice = 30;
let price;
if (age >= 65) {
    price = basePrice - basePrice * .50;
    alert(`your ticket price is $ ${price}`);
} else {
    alert(`your ticket price is $ ${basePrice}`);
} */

//version 2
/* let age = parseInt(prompt("What is your age?"));
if (age < 0){
    alert("It is an invalid age");
} else {
    let county = prompt("What is your county?");
    let basePrice = 40;
    let price;
    if (county === "Warren"){
        alert("your ticket price is $30");
    } else if (age < 5) {
        alert("Your ticket price is $0");
    } else if (age >= 65) {
        price = basePrice - basePrice * .5;
        alert(`your ticket price is $ ${price}`);
    } else if(age < 14 && county === "Clermont") {
        price = basePrice - basePrice * .18;
        alert(`your ticket price is $ ${price}`);
    } else if (age >= 65 && county === "Campbell") {
        price = basePrice - basePrice * .575;
        alert(`your ticket price is $ ${price}`);
    }
    else {
        alert(`your ticket price is $ ${basePrice}`);
    }
} */

