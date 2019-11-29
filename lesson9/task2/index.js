function copy(mainObj) {
    let objCopy = {}; 
    let key;
  
    for (key in mainObj) {
      objCopy[key] = mainObj[key]; 
    }
    return objCopy;
  }
  
  const mainObj = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }
  
  console.log(copy(mainObj));