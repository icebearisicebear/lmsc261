/*
let semester = 5;
print(semester);

semester = 6;
print(semester);

const major = 'performance';
print(major);
*/


// strings

/*
let firstName = 'Peter';

let nameUC = firstName.toUpperCase();
print(nameUC);

let nameLC = firstName.toLowerCase();
print(nameLC);

let nameLength = firstName.length;
print(nameLength);
*/


// numbers

/*
let num1 = 15; // int
let num2 = 10; // float

print(num1 + num2);
print(num1 - num2);
print(num1 * num2);
print(num1 / num2);
print(num1 ** num2); // power
print(num1 % num2); // remainder
*/

// boolean


let amountDrank = prompt('How much did you drink?');
const drinkingLimit = 8;
let areYouDrunk = amountDrank >= drinkingLimit;

// ternary operator

let messsageToPrint = areYouDrunk ? 'Go home dumbass.' : 'Kep on partying.';
print(messsageToPrint);
