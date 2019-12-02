const  getMaxAbsoluteNumber = arr =>{

    // let max = -Infinity;
    // arr.foEach(num => {

    //     if(Math.abs[num] > max){
    //         max= Math.abs[num];
    //     }
    // });
    // return max ;

    const absoluteValues= arr
      .map(num => Math.abs(num));
      const max= Math.max(...absoluteValues);
     return max;

}
