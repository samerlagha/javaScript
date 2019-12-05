  export  function bind(func, context,...arg) {
    
    return function(...arg1) {

       return func.call(context ,...arg1,...arg)
    }
}

