function getRandomNumbers(arr,from, to) {
    const arr = [];
 function getRandomInt(from, to) {
    from = Math.ceil(from);
    to = Math.floor(to);
    return Math.floor(Math.random() * (to - from)) + from;
}
    for (let i = 0; i < length; i++) {
        arr.push(getRandomInt(min, max))
    };
    return arr;
}
