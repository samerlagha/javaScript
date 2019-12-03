export const  pickProps = (obj,arr) => {
    return arr.reduce((arr, elm) => {
        for (const key in obj) {
            if (key === elm) {
                arr[elm] = obj[key];
            }
        }
        return arr;
    }, {});
};

const arr= ['a', 17.1, 'John Doe'] ;
const obj= { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
console.log(pickProps(obj,arr));