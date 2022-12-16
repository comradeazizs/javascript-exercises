const sumAll = function (num1, num2) {
    if (isNaN(num1) || isNaN(num2) || typeof (num1) == "string" || typeof (num2) == "string" || num1 < 0 || num2 < 0) {
        return ("ERROR");
    }
    let bigNum, smallNum;
    if (num1 >= num2) {
        bigNum = num1;
        smallNum = num2;
    } else {
        bigNum = num2;
        smallNum = num1;
    }
    let total = 0;
    for (let i = smallNum; i <= bigNum; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
