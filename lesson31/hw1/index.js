 export const delay = time =>new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('resolve'));
        }, time);
    });


delay(3000)
.then(()=> console.log('Done'));