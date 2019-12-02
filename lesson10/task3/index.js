const multiRound = float =>
[
    Math.floor(float*100)/100,
    Math.round(float*100)/100,
    Math.ceil(float*100)/100,
    Math.trunc(float*100)/100,
    +float.toFixed(2),
];

console.log(multiRound(13.6589));