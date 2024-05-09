let  a = "naman";

let b = "";

for(let i=a.length-1; i>=0; i-- ){
   b+=a[i]
}
if(b == a){
    console.log("YEs it is palindrome ✅");
}
else{
    console.log("NO, it's not a palindrome ❌");
}
console.log(b);