const removeFromArray = function(arr, ...nums) {
    let newArr = [];
    topLoop: for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<nums.length; j++){
            if(arr[i] === nums[j]){
                continue topLoop;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
