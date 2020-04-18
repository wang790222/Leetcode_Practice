var RecentCounter = function() {
  this.call = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.call.push(t)

  while (Math.abs(this.call[0] - t) > 3000) {
    this.call.shift();
  }

  return this.call.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */