export function createCalculator() {
    let result = 0;

    function add(number) {
        return result += number;
    }

    function decrease(number) {
        return result -= number;
    };

    function reset() {
        return result = 0;
    };

    function getMemo() {
        return result;
    }
    return {
        add,
        decrease,
        reset,
        getMemo
    };
};