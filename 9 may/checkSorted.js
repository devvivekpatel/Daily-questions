
let ar = [1,2,3,4,4,5];
var a;
let b = true;;

for(let i=0; i<ar.length; i++){
    a = ar[i];
    if(a>ar[i+1]){
        b = false;
        break;
    }
}

if(b==true){
    console.log("Yes, it is sorted ✅");
}
else{
    console.log("NO, it's not sorted ❌");
}

