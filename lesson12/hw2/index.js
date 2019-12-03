const cleanTransactionsList = transactions =>transactions.filter(i => !isNaN(i)).map(i => 
                                   '$' + Number(i).toFixed(2));
