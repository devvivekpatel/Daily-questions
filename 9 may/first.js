// Q1.  💡

let a = [10,20,30,40 , 50];
let b = [30,40,50,1,2];

for(let i=0; i<a.length; i++){
    for(let j=0; j<b.length; j++){
        if(a[i] == b[j]){
            console.log(a[i]);
        }
    }
}

console.log(5!=="5"); //true
console.log(5!="5"); //false
console.log(5===5);  //true
console.log(5==="5"); //false

function z(){
    // z is not accessible outside ✨ remember 
    var y=6;
    console.log("It is y 😑",y)
}
z();
console.log(y);