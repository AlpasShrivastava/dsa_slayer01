let str = "willlaams";
let obj = {};
for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) {
        obj[str[i]] = 1;
    } else {
        obj[str[i]]++;
    }
}
let max_count = 0;
let min_count = Infinity;
for (let char in obj) {
    if (obj[char] > max_count) {
        max_count = obj[char];
    }
    if (obj[char] < min_count) {
        min_count = obj[char];
    }
}
console.log(obj);
console.log(max_count);
console.log(min_count);