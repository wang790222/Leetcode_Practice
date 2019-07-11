/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {

    let temp = [];
    for (let s of S) {
        if (s >= "a" && s <= "z" || s >= "A" && s <= "Z") {
            temp.push(s);
        }
    }
    temp.reverse();
    let result = [];
    let index = 0;
    for (let s of S) {
        if (!(s >= "a" && s <= "z" || s >= "A" && s <= "Z")) {
            result.push(s);
        } else {
            result.push(temp[index]);
            index++;
        }
    }

    return result.join("");
};