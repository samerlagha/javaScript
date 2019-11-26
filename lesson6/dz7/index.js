function sortAsc(array) {
    for (let i = array.length-1; i >= 0; i--) {
      for (let j = i; j >= 0; j--) {
        if (array[i] < array[j]) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }


function sortDesc(array){

    for (let i = 0; i < array.length; i++) {
      
      for (let j = i; j < array.length; j++) {
        if (array[i] < array[j]) {
          let temp = array[i]; 
          array[i] = array[j]; 
          array[j] = temp; 
        };
      };
    };
    return array;
  }
 
