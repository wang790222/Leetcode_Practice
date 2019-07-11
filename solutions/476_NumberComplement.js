/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {

    let tempNum = (num).toString(2).split("");
    let arr = [];
    let index = 0;
    for (let i of tempNum) {
        arr[index] = (i === "1") ? "0" : "1";
        index++;
    }

    return parseInt(arr.join(""), 2);
};