import {getPrimes} from './index';

it('should get all primes', function () {
    const result = getPrimes(5);
    expect(result).toEqual([2, 3, 5]);
});

it('should get all primes', function () {
    const result = getPrimes(10);
    expect(result).toEqual([2, 3, 5, 7]);
});

it('should get all primes', function () {
    const result = getPrimes(15);
    expect(result).toEqual([2, 3, 5, 7, 11, 13]);
});