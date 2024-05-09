let ar = [1,4,6,70,14,60];

let max = ar[0];

for(let i=0; i<ar.length; i++){
    if(max < ar[i]){
        max = ar[i];
    }
}

console.log(max, " : is the greatest in this array ✅");