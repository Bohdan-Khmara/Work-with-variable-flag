/**
 * Check for value. Task 1
 * @type {(number|string)[]}
 */
let arr = [1, 2, 'c', 'd', 5];
let flag = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'c') {
        flag = true;
        alert('есть');
    }
}
