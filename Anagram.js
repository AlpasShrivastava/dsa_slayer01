
let str1 = "kamal";
let str2 = "makal";
let obj = {};
for(let i=0;i<str1.length;i++){
   if(obj[str1[i]]==undefined){
       obj[str1[i]] = 1 ;
   }else{
       obj[str1[i]]++;
   }
}
console.log(obj+ "trial");
for(let i=0;i<str2.length;i++){
    if(obj[str2[i]]==undefined){
       console.log("not anagram");
       break;
   }else{
       obj[str2[i]]--;
   }
}
   let flag = false;

   for (let char in obj){
       if(obj[char]!==0){
           flag = true;
           break;
       }
   }
   if (flag == true){
       console.log("Not Anagram")
   }else{
       console.log(" Anagram")

   }









