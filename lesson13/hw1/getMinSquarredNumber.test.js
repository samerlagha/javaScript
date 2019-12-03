import getMinSquaredNumber from './getMinSquaredNumber';

it('should get squared in minNumber from array',() => {

    const result = getMinSquaredNumber([4,8,-2,77,90,-55]);
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