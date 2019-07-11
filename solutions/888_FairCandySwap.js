/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {


    let sumA = 0;
    let sumB = 0;
    for (let a of A) {
        sumA += a;
    }

    for (let b of B) {
        sumB += b;
    }

    for (let a of A) {
        let remainA = sumA - a;
        for (let b of B) {

            if (remainA + b === a + sumB - b) {
                return [a, b];
            }
        }
    }
};