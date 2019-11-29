function  getCustomersList(customers){
    let arr = [];
    for (let key in customers) {
    arr.push({[key]: customers[key]});
    return arr;
    }
    
    }
    
     const  customers =  {
        'customer-id-1': {
            name: 'William',
            age: 54
        },
        'customer-id-2': {
            name: 'Tom',
            age: 17
        },
        
    }
     
    
    console.log( getCustomersList(customers));