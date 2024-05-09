//#working
let a = [1,1,1,23,23,4,5,6,4,35,6,4,4];

for(let i=0; i<a.length; i++){
    for(let j=i+1; j<a.length; j++){
        if(a[i]==a[j]){
            console.log(a[j]);
        }
    }
}