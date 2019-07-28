/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {

  let arr = equation.split("=");
  let eqLeft = arr[0];
  let eqRight = arr[1];

  let left = calculate(addPlus(eqLeft), true);
  let right = calculate(addPlus(eqRight), false);
  let sumUp = calculate(left + right, true);

  if (sumUp === "+0x+0") {
    return "Infinite solutions";
  }

  let result = sumUp.split("x");
  if (!result[0]) {
    return "x=" + (-1) * parseInt(result[0], 10);
  } else if (parseInt(result[1], 10) === 0) {
    return "x=0";
  } else if(parseInt(result[0], 10) === 0) {
     return "No solution";
  } else {
    return "x=" + ((-1) * parseInt(result[1], 10) / parseInt(result[0], 10)).toString();
  }
};

function addPlus (f) {
  let formulaArr = f.split("");
  if (formulaArr[0] !== "-") {
    formulaArr.unshift("+");
  }
  return formulaArr.join("");
}

function calculate (f, isLeft) {
  let sign = [];
  for (let c of f) {
    if (c === "+" || c === "-") {
      sign.push(c);
    }
  }

  let numArr = f.split(/[-+]/);
  numArr.shift();
  let numSum = 0;
  let xSum = 0;
  let index = 0;
  for (let n of numArr) {
    if (n[n.length - 1] === "x") {
      let numOfX = n.split("x");
      if (numOfX[0]) {
        xSum += (sign[index] === "-") ? (-1) * parseInt(numOfX, 10) : parseInt(numOfX, 10);
      } else {
        xSum += (sign[index] === "-") ? -1 : 1;
      }
    } else {
      numSum += (sign[index] === "-") ? (-1) * parseInt(n, 10) : parseInt(n, 10);
    }

    index++;
  }

  xSum = (isLeft) ? xSum : (-1) * xSum;
  numSum = (isLeft) ? numSum : (-1) * numSum;

  let xSumString = (xSum >= 0) ? `+${xSum.toString()}x` : `${xSum.toString()}x`;
  let numSumString = (numSum >= 0) ? `+${numSum.toString()}` : `${numSum.toString()}`;

  return `${xSumString}${numSumString}`;
}