let ar = [ 10, 30,0,-2, 50, 20, 100,5, 14,15];

let min = ar[0]; 

for(let i=0; i<ar.length; i++){
    if(min > ar[i]){
        min = ar[i];

    }
}
console.log(min," : is the Smallest in given array 🔴");