// not done ❌
let ar = ["naman","ram","anshuman","shivam"];
let b = [];

// console.log(ar[0].length);
var len;
for(let i=0; i<ar.length; i++){
    len = ar[i].length;

    if(len >ar[i+1].length){
        b.push(ar[i]);
        // console.log(b);
    }
    
}
console.log(b);