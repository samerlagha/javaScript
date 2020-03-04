export const fetchUser = async userId => {
    try {
        const response = await fetch (`https://api.github.com/users/${userId}`); //запрос на сайт 
        if(!response.ok){ //якщо корист не знайден то це значення буде false
            return null; // тому вертаєм налл
        } 
        //витягуєм дані за сервера з доп json 
        const userData = await response.json(); //з евейт отрим дані проміса а не сам проміс
        return userData;
    } catch (err) {
        throw new Error('Failed to fetch user');
    }
    };

fetchUser('facebook') //викл з айді користувача
    .then(userData => console.log(userData))
    .catch(err => alert(err.message));