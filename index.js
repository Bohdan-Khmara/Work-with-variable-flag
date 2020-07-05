/**
 * Value checking function. Task 3
 * @type {number[]}
 */
let arr = [1, 2, 3, 4, 5];

function hasNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            return alert('есть');
        }
    }
    return alert('нет');
}

hasNumber(arr);