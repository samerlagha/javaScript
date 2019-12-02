const getRandomNumbers = (array, from, to) =>{
    const wrongNumbers = to < from;
       const noNumbersBetween = (to - from < 1) && Math.ceil(to) === Math.ceil(from);
   
       if (wrongNumbers || noNumbersBetween) return null;
   
   
      return Array(array)
           .fill()
           .map(el => Math.trunc((Math.random() * (to - from) + from)));
   
   
   };