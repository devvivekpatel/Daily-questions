// not done ❌

// console.log(ar[0].length);
// var len;
// for(let i=0; i<ar.length; i++){
    //     len = ar[i].length;
    //     console.log(len);
    
    //     if(len >ar[i+1].length){
        //         b.push(ar[i]);
        //         // console.log(b);
        //     }
        
        // }
        // console.log(b);

        let ar = ["naman","ram","anshuman","shivam"];
        let b = [];

        for(let i=0; i<ar.length; i++){
            for(let j=i+1; j<ar.length; j++){
                if(ar[i].length > ar[j].length){
                    b.push(ar[j]);
                }
            }
        }
        console.log(b);