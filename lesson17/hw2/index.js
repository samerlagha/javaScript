
  export const timer ={
     timerCount:0,
    secondsPassed: 0,
    minsPassed:0 ,
    startTimer(){
    timerCount = setInterval(() => {
        this.secondsPassed +=5;
        if(this.secondsPassed ===60){
            this.minsPassed++;
            this.secondsPassed=0;
        }
    }, 5000);
    },

    getTime(){
            if(this.secondsPassed < 10){
                return this.minsPassed + ':0'+this.secondsPassed;
            } else return this.minsPassed + ':'+this.secondsPassed;
    },

    stopTimer(){
       clearInterval(timerCount);
    },
    resetTimer(){
       this.minsPassed=0;
       this.secondsPassed=0;
    }
}