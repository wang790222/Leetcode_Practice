/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {

  let obj = {};
  let result = [];
  for (let item of cpdomains) {

    let times = item.split(" ")[0];
    let domain = item.split(" ")[1];
    let subDomain = domain.split(".");

    while (subDomain.length !== 0) {

      let tempDomain = subDomain.join(".");
      if (!(tempDomain in obj)) {
        obj[tempDomain] = parseInt(times, 10);
      } else {
        obj[tempDomain] += parseInt(times, 10);
      }
      subDomain.shift();
    }
  }

  for (let key in obj) {
    result.push(obj[key] + " " + key);
  }

  return result;
};