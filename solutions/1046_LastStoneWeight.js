/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

  while (stones.length > 1) {
    let max = 0;
    let sec = 0;
    let maxIndex = 0;
    let secIndex = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] > max) {

        if (max > sec) {
          sec = max;
          secIndex = maxIndex;
        }

        max = stones[i];
        maxIndex = i;
      } else if(stones[i] > sec) {
        sec = stones[i];
        secIndex = i;
      }
    }

    stones.splice(stones.indexOf(max), 1);
    stones.splice(stones.indexOf(sec), 1);
    stones.push(max - sec);
  }

  return stones;
};