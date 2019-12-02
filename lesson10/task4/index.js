const  getMaxAbsoluteNumber = arr =>{

    // let max = -Infinity;
    // arr.foEach(num => {

    //     if(Math.abs[num] > max){
    //         max= Math.abs[num];
    //     }
    // });
    // return max ;

    const absoluteValues= arr=>{
        if (!Array.isArray(arr) || arr.length === 0) return null;
       const tempValue= arr.map(num => Math.abs(num));
      const max= Math.max(...tempValue);
     return max;
    }
}
