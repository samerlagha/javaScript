import {findDivCount} from './index';

it('should DivCount 5', function () {
    const result = findDivCount(2, 10, 2);
    expect(result).toEqual(5);
});

it('should DivCount 3', function () {
    const result = findDivCount(5, 10, 2);
    expect(result).toEqual(3);
});

it('should DivCount 1', function () {
    const result = findDivCount(9, 10, 2);
    expect(result).toEqual(1);
});