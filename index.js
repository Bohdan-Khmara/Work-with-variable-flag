/**
 * Value division function. Task 4
 * @type {number}
 */
let userInput = Number(prompt('input your value'));
let arr = [];

function hasNumber(userInput) {
    for (let i = 1; i <= userInput; i++) {
        arr.push(i);
        if (userInput / i === 1) {
            return true;
        }
    }
    return false;
}

hasNumber(userInput);