/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {

    let index = 0;
    let next = null;
    let i = 0;
    for (; i < arr.length; i++) {
        if (arr[i] === 0) {
            let next = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                let temp = arr[j];
                arr[j] = next;
                next = temp;
            }
            console.log(arr);
            i++;
        }
    }
};

