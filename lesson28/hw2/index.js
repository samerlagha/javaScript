export const maxFibonacci = value =>{

    let start =0,
    next = 1;

    if(value <1) return 0;

    for(let i =0 ; i<value; i++){
        if(start >value){
            return next -start;
        } else {
            next = start + next ;
            start = next - start;
        }
    };
    return next - start;
}