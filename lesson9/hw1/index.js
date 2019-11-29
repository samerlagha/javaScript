const getCustomersList = obj => {
        const resultObj = {};
        for (const key in obj) {
            resultObj[key] = {...obj[key]}
            resultObj[key]['id'] = key;
        }
        return Object.values(resultObj).sort((elem1, elem2) => elem1.age - elem2.age);
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