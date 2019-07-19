let obj = {};
let randomElement = [
  "1","2","3","4","5","6","7","8","9","0",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {

  let shortUrl = "";
  if (!(longUrl in obj)) {
    shortUrl = `http://tinyurl.com/${getShortUrl()}`;
    obj[longUrl] = shortUrl;
  } else {
    shortUrl = obj[longUrl];
  }

  return shortUrl;
};

function getShortUrl() {

  let shortUrl = "";
  for (let i = 1; i <= 6; i++) {
    shortUrl += randomElement[Math.floor(Math.random() * Math.floor(62))];
  }

  return shortUrl;
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  for (let key in obj) {
    if (obj[key] === shortUrl) {
      return key;
    }
  }

  return null;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */