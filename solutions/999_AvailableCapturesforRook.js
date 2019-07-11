/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {

  let rPosition = {
    xAis: null,
    yAis: null
  }

  let pawns = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        rPosition.xAis = j;
        rPosition.yAis = i;
      }
    }
  }

  // left
  let tempX = rPosition.xAis - 1;
  while (tempX >= 0) {
    if (board[rPosition.yAis][tempX] === 'p') {
      pawns++;
      break;
    } else if (board[rPosition.yAis][tempX] === 'B') {
      break;
    }

    tempX--;
  }

  // right
  tempX = rPosition.xAis + 1;
  while (tempX < 8) {

    if (board[rPosition.yAis][tempX] === 'p') {
      pawns++;
      break;
    } else if (board[rPosition.yAis][tempX] === 'B') {
      break;
    }

    tempX++;
  }

  // down
  let tempY = rPosition.yAis + 1;
  while (tempY < 8) {
    if (board[tempY][rPosition.xAis] === 'p') {
      pawns++;
      break;
    } else if (board[tempY][rPosition.xAis] === 'B') {
      break;
    }

    tempY++;
  }

  // up
  tempY = rPosition.yAis - 1;
  while (tempY >= 0) {
    if (board[tempY][rPosition.xAis] === 'p') {
      pawns++;
      break;
    } else if (board[tempY][rPosition.xAis] === 'B') {
      break;
    }

    tempY--;
  }

  return pawns;
};