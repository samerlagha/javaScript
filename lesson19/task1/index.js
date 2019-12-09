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
        ship.move();
        console.log(`${this.name}  lifting anchor up`);
        
    },

    stopMachine(){
        ship.stop();
     console.log(`${this.name} lifting anchor down`);
     
    },
    __proto__:vehicle
}