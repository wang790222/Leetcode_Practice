/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== "."){
        let vUp     = 1;
        let vDown   = 1;
        let hLeft   = 1;
        let hRight  = 1;

        while (j + hRight < 9) {
          if (board[i][j] === board[i][j + hRight]) {
            return false;
          }

          hRight++;
        }

        while (j - hLeft >= 0) {
          if (board[i][j] === board[i][j - hLeft]) {
            return false;
          }

          hLeft++;
        }

        while (i + vUp < 9) {
          if (board[i][j] === board[i + vUp][j]) {
            return false;
          }

          vUp++;
        }

        while (i - vDown >= 0) {
          if (board[i][j] === board[i - vDown][j]) {
            return false;
          }

          vDown++;
        }

        if (!testInSmallBoard(board, j, i)) {
          return false;
        }
      }
    }
  }

  return true;
};

function testInSmallBoard (board, x, y) {

  let area = decideArea(x, y);
  let areaStartFrom = startFrom(area);

  for (let i = areaStartFrom[0]; i < areaStartFrom[0] + 3; i++) {
    for (let j = areaStartFrom[1]; j < areaStartFrom[1] + 3; j++) {
      if (i !== y && j !== x) {
        if (board[y][x] === board[i][j]) {
          return false;
        }
      }
    }
  }

  return true;
}

function decideArea (x, y) {
  if ((x < 3) && (y < 3)) {
    return 0;
  } else if ((x >= 3 && x < 6 ) && (y < 3)) {
    return 1;
  } else if ((x >= 6 ) && (y < 3)) {
    return 2;
  } else if ((x < 3) && (y >= 3 && y < 6)) {
    return 3;
  } else if ((x >= 3 && x < 6 ) && (y >= 3 && y < 6)) {
    return 4;
  } else if ((x >= 6 ) && (y >= 3 && y < 6)) {
    return 5;
  } else if ((x < 3) && (y >= 6)) {
    return 6;
  } else if ((x >= 3 && x < 6 ) && (y >= 6)) {
    return 7;
  } else if ((x >= 6 ) && (y >= 6)) {
    return 8;
  }
};

function startFrom (area) {
  switch (area) {
    case 0:
      return [0, 0];
    case 1:
      return [0, 3];
    case 2:
      return [0, 6];
    case 3:
      return [3, 0];
    case 4:
      return [3, 3];
    case 5:
      return [3, 6];
    case 6:
      return [6, 0];
    case 7:
      return [6, 3];
    case 8:
      return [6, 6];
  }
};
