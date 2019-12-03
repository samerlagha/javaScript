export default array =>{
 if(!Array.isArray(array) || array.length < 1) return null;
 let minNumber= Math.abs(array[0]);

 for(let num of array){
     if(minNumber > Math.abs(num)) 
        minNumber= Math.abs(num)
 }
return minNumber * minNumber;


}