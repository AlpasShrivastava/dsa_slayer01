let a =  0;
let b = 1;
let n = 4;

for(let i=0;i<n;i++){
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}