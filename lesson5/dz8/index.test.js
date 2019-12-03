import {compareSums} from './index'
it('should get true', function () {
    const result = compareSums(3, 4, 1, 2);
    expect(result).toEqual(true);
});

it('should get false', function () {
    const result = compareSums(4, 3, 8, 2);
    expect(result).toEqual(false);
});

it('should get false', function () {
    const result = compareSums(1,2,3,4);
    expect(result).toEqual(false);
});