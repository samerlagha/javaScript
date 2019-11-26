function cloneArr(arr){
    if (!arr) {
       return arr;
     }
   
     let v;
     let bObject = Array.isArray(arr) ? [] : {};
     for (const k in arr) {
       v = arr[k];
       bObject[k] = (typeof v === "object") ? copy(v) : v;
     }
   
     return bObject;
   
   }