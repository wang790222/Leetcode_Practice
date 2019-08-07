/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

  let arr = [];
  for (let i = 0; i < grid.length; i++) {
    let temp = [];
    for (let j = 0; j < grid[i].length; j++) {
      temp.push(-1);
    }

    arr.push(temp);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === 1) {
        let neb = 0;
        if ((i + 1 < grid.length) && grid[i + 1][j] === 1) {
          neb++;
        }
        if ((i - 1 >= 0) && grid[i - 1][j] === 1) {
          neb++;
        }
        if ((j + 1 < grid[i].length) && grid[i][j + 1] === 1) {
          neb++;
        }
        if ((j - 1 >= 0) && grid[i][j - 1] === 1) {
          neb++;
        }

        arr[i][j] = neb;
      }
    }
  }


  let perimeter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      switch(arr[i][j]) {
        case 0:
          perimeter += 4;
          break;
        case 1:
          perimeter += 3;
          break;
        case 2:
          perimeter += 2;
          break;
        case 3:
          perimeter += 1;
          break;
      }
    }
  }
  return perimeter
};