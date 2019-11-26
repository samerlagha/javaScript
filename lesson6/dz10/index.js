function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
      if (clients[i] == client) {
           balances =balances[i] - amount;
          if (balances >= 0) {
              return balances;
          } else {
              return -1;
          }
      }
  }
}