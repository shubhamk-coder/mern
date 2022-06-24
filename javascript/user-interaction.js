// task-1
let isOpted = confirm('Do you wish to enable advertisement?');
if (isOpted) {
  let email = prompt('Enter your email');
  let name = prompt('Enter your name');
  let phoneNum = prompt('Enter your phone number');
  alert('email - ' + email + '\n' + 'name - ' + name + '\n' + 'phone number - ' + phoneNum);
}

// task-2
let num1 = parseInt(prompt('Enter your number-1'));
let num2 = parseInt(prompt('Enter your number-2'));
alert(num1 + " is of type " + typeof num1 + " & " + num2 + " is of type " + typeof num2);
if(isNaN(num1) || isNaN(num2)){
  alert("Can not add incompatible types");
}else{
  let sum = num1+num2;
  alert("Sum is "+sum);
}
/* if(Number.isInteger(num1) && Number.isInteger(num2)){
    let sum = num1+num2;
    alert("Sum is "+sum);
}else{
    alert("Can not add incompatible types");
}
 */
/* let num3 = parseInt(prompt('Enter your number-1'));
let num4 = parseInt(prompt('Enter your number-2'));
 if(isNaN(num3) && isNaN(num4)){
	alert(num3 + " is of type Number " + " & " + num4 + " is of type Number");
 }else{
	alert(num3 + " is not of type Number " + " & " + num4 + " is not of type Number");
 }
 if(isNaN(num3)){
	alert(num3 + " is of type Number ");
 }else{
	alert(num3 + " is not of type Number ");
 }
 if(isNaN(num4)){
	alert(num4 + " is of type Number ");
 }else{
	alert(num4 + " is not of type Number ");
 }
 if(Number.isInteger(num3) && Number.isInteger(num4)){
    let sum = num3+num4;
    alert("Sum is "+sum);
}else{
    alert("Can not add incompatible types");
} */

