/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    let resultObj = {};
    let resultNum = 0;

    for (e of emails) {
      let frontPart = e.split("@")[0];
      let endPart = e.split("@")[1];

      frontPart = frontPart.split(".").join("");

      frontPart = frontPart.split("+")[0];

      if (!((frontPart + "@" + endPart) in resultObj)) {
        resultObj[frontPart + "@" + endPart] = true;
        resultNum++;
      }
    }

    return resultNum;
};