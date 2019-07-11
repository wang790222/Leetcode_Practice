/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {

    let result = [];
    for (let i of queries) {
        A[i[1]] += i[0];
        let temp = 0;
        for (let n of A) {
            if (n % 2 === 0) {
                temp += n;
            }
        }
        result.push(temp);
    }

    return result;
};