// Task-1 Armstrong Number
/* let num = parseInt(prompt("Enter your number"));
let sum = 0;
function armstrong (num) {
    let temp = num;
    while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}
}
armstrong(num);
    if (sum == num) {
    console.log(`${num} is an Armstrong number.`);
}
    else {
    console.log(`${num} is not an Armstrong number.`);
} */

// Task-2 krishnamurthy Number
/* let num = parseInt(prompt("Enter your number"));
let sum = 0;
function krishnamurthy (num) {
    let temp = num;
    while (temp > 0) {
    let remainder = temp % 10;
    let temp2 = remainder;
    for(i = remainder - 1; i > 0; i--) {
        temp2 = temp2 * i;
    }
    sum += temp2;
    temp = parseInt(temp / 10);
}
}
krishnamurthy(num);
    if (sum == num) {
    console.log(`${num} is an Krishnamurthy number.`);
}
    else {
    console.log(`${num} is not an Krishnamurthy number.`);
} */
