/**
 * Check if current and next are equal. Task 5
 * @type {number[]}
 */
let arr = [1, 2, 2, 4, 5];

function hasNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return alert('да');
        }
    }
    return alert('нет');
}

hasNumber(arr);