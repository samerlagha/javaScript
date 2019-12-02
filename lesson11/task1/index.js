const splitText = (text,len)=>{
  const strArr=[];
  let startPosition=0;

  if (typeof text != 'string') {
    return null;
}
if (len === undefined) {
    len= 10;
}
   while(true){
       let chunk =text.substr(0,len);
       if(chunk.length ===0){

        break;
     }
     strArr.push(chunk[0].toUpperCase( )+ chunk.slice(1));
      startPosition +=len;

    
     
     return strArr.join('\n');
   }
} ;