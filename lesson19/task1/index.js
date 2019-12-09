 export const vehicle ={
    name:'Argo',
    move(){
        
        console.log(`${name} is moving`);
    },

    stop(){
        console.log(`${name} stoped`);
    }
};

 export const ship ={
    startMachine(){
        console.log(`${this.name}  lifting anchor up`);
        ship.move();
    },

    stopMachine(){
     console.log(`${this.name} lifting anchor down`);
     ship.stop();
    },
    __proto__:vehicle
}