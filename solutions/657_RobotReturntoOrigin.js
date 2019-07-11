/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

    let h = 0;
    let v = 0;

    for (let m of moves) {
        switch(m) {
            case 'U':
                v++;
            break;
            case 'D':
                v--;
            break;
            case 'L':
                h++;
            break;
            case 'R':
                h--;
            break;
        }
    }
    return ((h === 0) && (v === 0));
};