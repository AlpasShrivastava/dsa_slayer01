let str = "kamal";
let revv = "";

for (let i=str.length-1;i>=0;i--){
    revv += str[i];
}

if(revv === str){
    console.log( "palindrome");
}else{
    console.log("Not palindrome")
}

