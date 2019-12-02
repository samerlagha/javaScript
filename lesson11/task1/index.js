const splitText = (text,len)=>{
  const strArr=[];
  let startPosition=0;

  if (typeof text != 'string') {
    return null;
}
if (len === undefined) {
    len = 10;
}
   while(true){
       let chunk =text.substr(startPosition,len);
       if(chunk.length ===0){

        break;
     }

     startPosition += len;

     strArr.push(chunk[0].toUpperCase()+ chunk.slice(1));

    }

     
     return strArr.join('\n');
   } ;