import {squareArray} from './index';

//if is not array
it('should get null', function () {
    const result = squareArray(19);
    expect(result).toEqual(null);
});

// square array
it('should get square number', function () {
    const result = squareArray([2, 3]);
    expect(result).toEqual([4, 9]);
});

//
it('should get square number', function () {
    const result = squareArray([7, -3]);
    expect(result).toEqual([49, 9]);
});