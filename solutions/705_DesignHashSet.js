/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.set = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  const keyExist = this.set.find((k) => k === key);

  if (!keyExist) {
    this.set.push(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  const keyIndex = this.set.findIndex((k) => k === key);

  if (keyIndex !== -1) {
    this.set.splice(keyIndex, 1);
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  const keyExist = this.set.find((k) => k === key);

  return (keyExist !== undefined);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */