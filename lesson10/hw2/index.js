const getRandomNumbers = (array, from, to) => Array(array)
        .fill()
        .map(el => Math.trunc((Math.random() * (to - from) + from)));