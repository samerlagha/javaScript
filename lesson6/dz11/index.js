function checker(arr){

 let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    }
    if(sum >1000) return true;
    else return false;
//console.log(sum);
}