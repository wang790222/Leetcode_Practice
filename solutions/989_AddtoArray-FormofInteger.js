/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {

    let kArr = [];
    if (K === 0) {
        kArr.push(0);
    } else {
        while (K !== 0) {
            kArr.push(K % 10);
            K = K / 10 | 0;
        }
    }

    return addStrings(A.join(""), kArr.reverse().join("")).split("");
};

var addStrings = function(num1, num2) {
    console.log(num1);
    console.log(num2);
    if (num1.length === 0) {
        return num2;
    }

    if (num2.length === 0) {
        return num1;
    }

    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");

    let i = 0;
    let numArr = [];
    let result = [];
    let carry = 0;
    while(i < num1.length && i < num2.length) {
        let num = (Number(num1[i]) + Number(num2[i]));
        numArr.push(num);
        i++;
    }

    while(i < num1.length) {
        numArr.push(Number(num1[i]));
        i++;
    }

    while(i < num2.length) {
        numArr.push(Number(num2[i]));
        i++;
    }

    for (let n of numArr) {
        let tempNum = carry + n;
        result.push(tempNum % 10);
        carry = (tempNum >= 10) ? 1 : 0;
    }

    if (carry) {
        result.push(1);
    }

    return result.reverse().join("");
};