/**
 * Value checking function. Task 2
 * @type {(number|string)[]}
 */
let arr = [1, 2, 'c', 'd', 5];

function hasElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'c') {
            return alert('есть');
        }
    }
    return alert('нет');
}

hasElem(arr);