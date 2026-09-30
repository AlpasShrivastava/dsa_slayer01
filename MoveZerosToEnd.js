

const MovesZeroToEnd = (arr) => {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i])
        }
    }
    while (newArr.length < arr.length) {
        newArr.push(0);
    }

    return newArr;
}

let result = MovesZeroToEnd([1, 5, 6, 0, 5, 0, 7, 0, 5, 9]);
console.log(result);