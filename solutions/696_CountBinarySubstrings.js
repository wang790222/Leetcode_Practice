/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {

    let sub = 0;
    for (let i = 0; i < s.length; i++) {
        let zeroAmount = 0;
        let oneAmount  = 0;
        let change = 0;
        let prev = null;

        if (s[i] === "0") {
            prev = "0";
            zeroAmount++;
        } else {
            prev = "1";
            oneAmount++;
        }

        for (let j = i + 1; j < s.length; j++) {
            if (s[j] === "0") {
                if (prev === "1") {
                  change++;
                  prev = "0";
                }
                zeroAmount++;
            } else {
                if (prev === "0") {
                  change++;
                  prev = "1";
                }
                oneAmount++;
            }
            if (change === 2) {
                break;
            }

            if (zeroAmount === oneAmount) {
                sub += 1;
                break;
            }
        }
    }

    return sub;
};