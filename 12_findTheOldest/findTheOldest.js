const findTheOldest = function (arr) {
    const today = new Date();
    const year = today.getFullYear();

    let flag, age, bigAge = 0;
    

    for (let i = 0; i < arr.length; i++) {
        if ('yearOfDeath' in arr[i]) {
            age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        } else {
            age = year - arr[i].yearOfBirth;
        }
        if (age > bigAge) {
            flag = i;
            bigAge = age;
        }
    }
    return arr[flag];
};

// Do not edit below this line
module.exports = findTheOldest;
