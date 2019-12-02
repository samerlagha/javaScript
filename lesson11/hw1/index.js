const splitString = (text,len=10)=>{

    if(typeof text !=='string') return null;
const strArr=[];
let startPosition=0;
while(true){
let chank = text.substr(startPosition,len);
if(chank.length ===0) break;
if(chank.length <len){
    chank= chank +'.'.repeat(len - chank.length);
}

strArr.push(chank);
startPosition += len;

}
return strArr;
}