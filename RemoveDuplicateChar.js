let obj = {};
let str = "Alpasxbb";
let result = "";
for(let i=0;i<str.length;i++){
if(obj[str[i]] == undefined){
    obj[str[i]] = 1;
    result += str[i]; 
}
// }else{
//     obj[str[i]]++;
// }
}
console.log(result);