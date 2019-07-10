/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

  if (a.length === 0 && b.length === 0) {

  }

  let lengthInfo = [];
  let result = "";
  let carry = 0;
  let aLength = a.length;
  let bLength = b.length;

  if (a.length > b.length) {
    for (let i = 0; i < aLength - bLength; i++) {
      b = "0" + b;
    }
  } else if (a.length < b.length){
    for (let i = 0; i < bLength - aLength; i++) {
      a = "0" + a;
    }
  }

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] == 1 && b[i] == 1 && carry == 1) {
      carry = 1;
      result += '1';
    } else if (a[i] == 1 && b[i] == 1 && carry == 0) {
      carry = 1;
      result += '0';
    } else if (a[i] == 1 && b[i] == 0 && carry == 1) {
      carry = 1;
      result += '0';
    } else if (a[i] == 1 && b[i] == 0 && carry == 0) {
      carry = 0;
      result += '1';
    } else if (a[i] == 0 && b[i] == 1 && carry == 1) {
      carry = 1;
      result += '0';
    } else if (a[i] == 0 && b[i] == 1 && carry == 0) {
      carry = 0;
      result += '1';
    } else if (a[i] == 0 && b[i] == 0 && carry == 1) {
      carry = 0;
      result += '1';
    } else {
      carry = 0;
      result += '0';
    }
  }

  if (carry === 1) {
    result += '1';
  }

  return result.split("").reverse().join("");
};