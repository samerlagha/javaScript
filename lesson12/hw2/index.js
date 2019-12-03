const cleanTransactionsList = transactions =>{

    transactions = transactions
      .filter(el => !isNaN(el).map(el =>
          '$'+Number(el).toFixed(2)));

          return transactions;
}