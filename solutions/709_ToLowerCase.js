/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {

    let result = "";
    for (let s of str) {

        let asciNum = s.charCodeAt(0);

        result += (asciNum <= 90 && asciNum >= 65) ?
             String.fromCharCode(s.charCodeAt(0) + 32) :
             String.fromCharCode(s.charCodeAt(0));
    }

    return result;
};