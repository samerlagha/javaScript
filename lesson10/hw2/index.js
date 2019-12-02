function getRandomNumbers(arr, from, to) {
    const arry = [];
      function getRandomInt(from, to) {
    fromn = Math.ceil(from);
    to = Math.floor(to);
    return Math.floor(Math.random() * (to - from)) + from;
}
    if (to < from || (to - from < 1) && Math.ceil(to) === Math.ceil(from)) {
        return null;
    }
    for (let i = 0; i < arr; i++) {
        arry.push(getRandomInt(from, to))
    };
    return arry;

  
};