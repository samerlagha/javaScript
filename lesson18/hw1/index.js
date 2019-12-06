function test(a, b) {
    return Math.sqrt(a * a + b * b);
}

function spy(func) {

function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
}

wrapper.calls = [];

return wrapper;
};
const spyTest = spy(test);
spyTest(4, 2);
spyTest(9, 1);


  console.log(spyTest.calls); // [ [4, 2], [9, 1] ]

/* Поддержка функций с контекстом */

const user = {
    name: 'John',
    sayHi() {
        return this.name;
    }
};

const spyMethod = spy(user.sayHi);

 console.log(spyMethod.apply({ name: 'Tom' })); // 'Tom'

console.log(spyMethod.calls );// [ [] ]