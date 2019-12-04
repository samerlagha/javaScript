let count = 0;
 export function add(num){
   return count +=num;
}


export function decrease(num){
    return count -=num;
}

export function reset(){
    return count=0;
}

export function getMemo(){
    return count;
}