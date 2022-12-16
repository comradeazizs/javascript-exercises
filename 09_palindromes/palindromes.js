const palindromes = function (str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " " || str.charAt(i) == "," || str.charAt(i) == "." || str.charAt(i) == "!") {
            continue;
        } else {
            newStr += str.charAt(i);
        }
    }

    return recPalind(newStr.toLowerCase());

    function recPalind(str) {
        if (str.length < 2) {
            return true;
        } else if (str.charAt(0) != str.charAt(str.length - 1)) {
            return false;
        } else {
            return recPalind(str.substring(1, str.length - 1));
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
