/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {

  let numArr = expression.split(/[-+\/]/);
  if (numArr.length % 2 === 1) {
    numArr.shift();
  }

  if (numArr.length === 2) {
    return expression;
  }

  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = parseInt(numArr[i], 10);
  }

  let signArr = [];
  let numeratorArr = [];
  let denominatorArr = [];

  for (let c of expression) {
    if (c === "+" || c === "-") {
      signArr.push(c);
    }
  }

  if (signArr.length !== (numArr.length / 2)) {
    signArr.unshift("+");
  }

  for (let i = 0; i < numArr.length; i++) {
    if (i % 2 === 0) {
      numeratorArr.push(numArr[i]);
    } else {
      denominatorArr.push(numArr[i]);
    }
  }

  let lcm = getLCM(denominatorArr[0], denominatorArr[1]);

  for (let i = 2; i < denominatorArr.length; i++) {
    lcm = getLCM(lcm, denominatorArr[i]);
  }

  for (let i = 0; i < denominatorArr.length; i++) {
    let mul = lcm / denominatorArr[i];
    numeratorArr[i] = numeratorArr[i] * mul;
  }

  let numeratorSum = 0;
  for (let i = 0; i < signArr.length; i++) {
    numeratorSum += (signArr[i] === "+") ? numeratorArr[i] : (-1) * numeratorArr[i];
  }

  while(true) {
    let div = false;
    for (let i = 2; i <= Math.min(Math.abs(numeratorSum), lcm); i++) {
      if (numeratorSum % i === 0 && lcm % i === 0) {
        numeratorSum /= i;
        lcm /= i;
        div = true;
      }
    }

    if (!div) {
      break;
    }
  }

  if (numeratorSum === 0) {
    lcm = 1;
  }

  return numeratorSum.toString() + "/" + lcm.toString();
};

function getLCM (a, b) {

  let primeArr = getPrime(Math.min(a, b));
  let gcd = 1;
  let tempA = a;
  let tempB = b;
  while (true) {
    let getDiv = false;
    for (let p of primeArr) {
      if (tempA % p === 0 && tempB % p === 0) {
        gcd *= p;
        getDiv = true;
        tempA = tempA / p | 0;
        tempB = tempB / p | 0;
      }
    }

    if (!getDiv) {
      break;
    }
  }

  return a / gcd * b;
}

function getPrime (n) {

  let prime = [];
  for (let i = 2; i <= n; i++) {
    let div = false;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        div = true;
        break;
      }
    }

    if (!div) {
      prime.push(i);
    }
  }

  return prime;
}