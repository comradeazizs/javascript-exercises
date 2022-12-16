const caesar = function (str, num) {
    let retStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 && num > 0) {
            if (str.charCodeAt(i) + num % 26 > 90) {
                retStr += String.fromCharCode(str.charCodeAt(i) + num % 26 - 26);
            } else {
                retStr += String.fromCharCode(str.charCodeAt(i) + num % 26);
            }
        } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123 && num > 0) {
            if (str.charCodeAt(i) + num % 26 > 122) {
                retStr += String.fromCharCode(str.charCodeAt(i) + num % 26 - 26);
            } else {
                retStr += String.fromCharCode(str.charCodeAt(i) + num % 26);
            }
        } else if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 && num < 0) {
            if (str.charCodeAt(i) + num % 26 < 65) {
                retStr += String.fromCharCode(str.charCodeAt(i) + num % 26 + 26);
            } else {
                retStr += String.fromCharCode(str.charCodeAt(i) + num % 26);
            }
        } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123 && num < 0) {
            if (str.charCodeAt(i) + num % 26 < 97) {
                retStr += String.fromCharCode(str.charCodeAt(i) + num % 26 + 26);
            } else {
                retStr += String.fromCharCode(str.charCodeAt(i) + num % 26);
            }
        } else {
            retStr += str.charAt(i);
        }
    }
    return retStr;
};

// Do not edit below this line
module.exports = caesar;
