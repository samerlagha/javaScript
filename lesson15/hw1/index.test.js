import { createCalculator, decrease, reset, getMemo } from './index.js.js'

it('should add number', () => {
    let calculator = createCalculator();
    let result = calculator.add(2);
    expect(result).toEqual(2);
});

it('should add number', () => {
    let calculator = createCalculator();
    let result = calculator.add(2);
    let result2 = calculator.decrease(1);
    expect(result2).toEqual(1);
});

it('should add number', () => {
    let calculator = createCalculator();
    let result = calculator.add(2);
    let result2 = calculator.reset()
    expect(result2).toEqual(0);
});

it('should add number', () => {
    let calculator = createCalculator();
    let result = calculator.add(2);
    let result3 = calculator.getMemo();
    expect(result3).toEqual(2);
});