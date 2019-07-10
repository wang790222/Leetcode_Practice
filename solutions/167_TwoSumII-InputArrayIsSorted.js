/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  console.log(numbers);

  for (let i = 0; i < numbers.length; i++) {

    let targetJ = target - numbers[i];
    for (let j = i + 1 ; j < numbers.length; j++) {
      if (targetJ === numbers[j]) {
        return [i + 1, j + 1];
      }
    }
  }
};