// let arr = [7, 1, 5, 3, 6, 4];

const TimeToBuySellStock = (arr) => {

    let minPrice = arr[0];
    let maxProfit = 0;

    for (let i = 0; i < arr.length; i++) {
        minPrice = Math.min(arr[i], minPrice);
        let profit = arr[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
}

let result = TimeToBuySellStock([7, 1, 5, 3, 6, 4])
console.log(result)