const reverseString = function(str) {
    if(str.length <2 ){
        return str;
    }else{
        return reverseString(str.substring(1)) + str.charAt(0);
    }
};

// Do not edit below this line
module.exports = reverseString;
