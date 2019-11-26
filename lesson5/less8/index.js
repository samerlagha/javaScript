function  compareSums(a, b, c, d){
    let sum1= sum(a,b);
      let sum2= sum(d,c);
   let compare = sum1 - sum2;

   
    if(compare>0) return true;
   if (compare<0) return false;
 }

 function sum(from, to){
    let res = 0;
  for ( from = 0; from <= to; from++) {
      res += from;
   }
      return res;
 }
  
// function  compareSums(a, b, c, d){
//     let sum1 = 0;
//     for ( a = 0; a <= b; a++) {
//         sum1 += a;
//      }
    
//       let sum2 = 0;
//     for ( c= 0; c <= d; c++) {
//         sum2 += c;
        
//      }
//      compare = sum1 - sum2 ;
   
//      if(compare >0){
//        return true;
//      } else if(compare<0){
//        return false;
//      }
// }

// let comp =compareSums(1,5,5,6);
// console.log(comp);