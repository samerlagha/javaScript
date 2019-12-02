function superRound(num, float) {
    if (!Number(num) || !Number.isInteger(float)) {
        return null;
    }
    const numbers = Math.pow(10, float);
    return [
        Math.floor(num * numbers) / numbers,
        Math.round(num * numbers) / numbers,
        Math.ceil(num * numbers) / numbers,
        Math.trunc(num * numbers) / numbers,
        +num.toFixed(float),

    ];
}