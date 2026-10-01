let arr = [2, 5, 7, 11];
// let arr = [6,5,6,5,3,8,7,2,4]
let k = 9;

//NORMAL
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == k) {
            console.log(arr[i], arr[j]);
        }
    }
}
//OPTIMISED APPROACH
let left = 0;
let right = arr.length - 1;
while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === k) {
        console.log(arr[right], arr[left]);
        break;
    } else if (sum < k) {
        left++;
    } else {
        right--;
    }
}