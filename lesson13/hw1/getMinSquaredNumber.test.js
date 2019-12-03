import getMinSquaredNumber from './getMinSquaredNumber';

it('should get squared in minNumber from array',() => {

    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});

it('should get null (from [])', () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
});

it('should get null (from string)', () => {
    const result = getMinSquaredNumber('string');

    expect(result).toEqual(null);
});