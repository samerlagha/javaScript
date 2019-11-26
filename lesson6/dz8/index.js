function uniqueCount(array) {
    let result = 0;
    let countUnique = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        countUnique++;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] == array[i]) {
                count++;
                 break;
            }
        }
    }
      result = countUnique - count;
       return result;
} 