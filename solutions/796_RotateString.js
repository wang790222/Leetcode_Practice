/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {

    if (!A && !B) {
        return true;
    }

    for (let i = 0; i < B.length; i++) {
        let tempStr = B.slice(i) + B.slice(0, i);
        if (tempStr === A) {
            return true;
        }
    }

    return false;
};