const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const  onCounterChange = e => {
    isbutton = e.target.classList.contains('counter__button');

    if (!isbutton) return;

    const action = e.target.dataset.action;
    const oldVelue = Number(counterValueElem.textContent);
    
    const newValue = action === 'decrease'
        ? oldVelue -1
        : oldVelue + 1;

    localStorage.setItem('counterValue', newValue);
    counterValueElem.textContent = newValue;

};

counterElem.addEventListener('click', onCounterChange);


const onStorageChange = e =>{
  counterValueElem.textContent = e.newValue;
}

window.addEventListener('storage',onStorageChange);


const  onDocumentLoaded = ()=> {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};
document.addEventListener('DOMContentLoaded', onDocumentLoaded);