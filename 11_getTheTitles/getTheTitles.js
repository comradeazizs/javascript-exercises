const getTheTitles = function(arr) {
    let retArr = [];
    for(let i = 0; i< arr.length; i++){
        retArr.push(arr[i].title);
    }
    return retArr;
};

// Do not edit below this line
module.exports = getTheTitles;
