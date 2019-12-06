 export const wallet ={
    transactions:[1,5,89,377,3],
    getMax(){
//    return Math.max.apply(null,this.transaction)
      return Math.max(...this.transactions);
    },

    getMin(){

        // return Math.min.apply(null, this.transaction)
        return Math.min(...this.transactions);
    }
}