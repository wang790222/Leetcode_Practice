/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  deck = deck.sort((a, b) => a - b);

  let init = Array.from(Array(deck.length).keys());
  let indexOrder = [];

  while (init.length) {
    let temp = init.shift();
    indexOrder.push(temp);

    if (init.length > 1) {
      init.push(init.shift());
    } else {
      indexOrder.push(init.shift());
    }
  }

  return indexOrder.reduce((ans, n, index) => {
    ans[n] = deck[index];

    return ans;
  }, []);
};