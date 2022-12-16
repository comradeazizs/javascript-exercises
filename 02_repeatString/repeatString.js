const repeatString = function(str, num) {
    if(num<0){
        return "ERROR";
    }
    let finStr = ""
    for(let i=0; i<num; i++){
        finStr += str;
    }
    return finStr;
};

// Do not edit below this line
module.exports = repeatString;
