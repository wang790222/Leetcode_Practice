/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {

    let five = 0;
    let ten = 0;
    for (let b of bills) {
        switch (b) {
            case 5:
                five++;
                break;
            case 10:
                five--;
                ten++;
                break;
            case 20:
                if (ten === 0) {
                    five -= 3;
                } else {
                    five--;
                    ten--;
                }
                break;
            default:
                return false;
        }
        if (five < 0 || ten < 0) {
            return false;
        }
    }

    return true;
};