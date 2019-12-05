export const callbackPrompt = {
    message: 'Enter your phone number',
    showPrompt() {
       const number = prompt(this.message);
   },
   showDeferredPrompt(ms) {
       setTimeout(this.showPrompt.bind(callbackPrompt), ms);
   }
};