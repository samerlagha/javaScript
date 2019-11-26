function squareArray(arr){
    
    let ret= [];
 
     if(!Array.isArray(arr)) return null;
 
     for (let i = 0 ; i <= arr.length -1 ; i++) {
         ret.push(arr[i] * arr[i]);
     }
 
      return ret;     
 }