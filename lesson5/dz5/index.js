function getSum(num1,num2){
    let sum=0;
    for (let i=num1 ; i <= num2; i++) {
   if (i % 2 === 0)  sum +=i;
   
  }
 // console.log(sum); 
 return sum;
}
getSum(4,20);

// function getSum(num1,num2){
//     if(num1 %2===0 && num2 % 2 ===0){
        
//       return num1+num2;
//     }
// }
//  let resut=  getSum(4,6);
//  console.log(resut);

//  function getSum(num1,num2){
//     if(num1 %2===0 ){
//         console.log(num1,num2);
//         return num1+num2;
//     }
// }
//  let resut=  getSum(10,6);
//  console.log(resut);