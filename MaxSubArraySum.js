
// let arr = [-1,2,5,-5,6];

const CalculateMaxSubArr = (arr) => {

    let maxSum = arr[0]
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum
}
// console.log(maxSum)
let result = CalculateMaxSubArr([-1, 2, 5, -5, 6])
console.log(result);
