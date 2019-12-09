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
        this.move();
    },

    stopMachine(){
     console.log(`${this.name} lifting anchor down`);
     this.stop();
    },
    __proto__:vehicle
}