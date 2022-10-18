//ternary
const money = 800;
const myVar = 5;
/* let food;
if (money > 500) {
    food = 'biriyani';
} else {
    food = 'cha biscuit';
}
console.log(food); */

//we can write the upper code in a line
//The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

let food = money > 500 ? 'biriyani' : 'cha biscuit';
// console.log(food);

let drink = (money > 500 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);
//use of ternary with and(&&) or (||)
let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();
// toggle boolean
isActive = !isActive;



