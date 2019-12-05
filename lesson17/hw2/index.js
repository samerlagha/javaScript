
   export const timer ={
    timerCount:0,
    secondsPassed: 0,
    minsPassed:0 ,
    startTimer(){
    this.timerCount = setInterval(() => {
        this.secondsPassed += 5;
        if (this.secondsPassed === 60) {
            this.secondsPassed = 0;
            this.minsPassed++;
            
        }
    }, 5000);
    },

    getTime(){
            if(this.secondsPassed < 10){
                return this.minsPassed + ':0'+this.secondsPassed;
            } else return this.minsPassed + ':'+this.secondsPassed;
    },

    stopTimer(){
       clearInterval(this.timerCount);
    },
    resetTimer(){
       this.minsPassed=0;
       this.secondsPassed=0;
    }
}