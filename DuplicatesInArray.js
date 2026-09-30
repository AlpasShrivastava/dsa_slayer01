
//In this problem we are finding the Duplicates of the array and returning it into an new Arry(the duplicates characters).
// let arr = [2,5,8,6,5,7,6,5,3]

const DuplicateInArray = (str) => {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] == undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
    // return obj;
    let newArr = [];
    for (let char in obj) {
        if (obj[char] > 1) {
            newArr.push(char)
        }
    }
    return newArr;
}
// console.log(maxSum)
let result = DuplicateInArray([-1, -1, 2, 5, -5, 6, 5, 2]);
console.log(result)
