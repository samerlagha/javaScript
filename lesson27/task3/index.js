import { setItem, getItem, todos } from './localStorage.js';

// const todos = [
//   { text: 'Buy milk', done: false,id :0 ,date: new Date(2019,9,1) ,dateComplet:new Date()},

//   { text: 'Pick up Tom from airport', done: false,id:1,date: new Date(2019,4,1),dateComplet:new Date()},

//   { text: 'Visit party', done: false ,id:2,date: new Date(2019,9,5),dateComplet:new Date()},

//   { text: 'Visit doctor', done: true,id:3 ,date: new Date(2019,9,9),dateComplet:new Date()},

//   { text: 'Buy meat', done: true ,id:4,date: new Date(2019,9,3),dateComplet:new Date()},
// ];


const listElem = document.querySelector('.list');
const btnElem = document.querySelector('.btn');
const inputElem = document.querySelector('.task-input');


const renderListItems = listItems => {
  const listElem = document.querySelector('.list');


  const listItemsElems = listItems
 
  .sort((a, b) => a.date - b.date)
      .sort((a, b) => b.done - a.done)
     .sort((a, b) => b.dateСompleted - a.dateСompleted)
     .map(({ text, done,id }) => {

      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.setAttribute('id',`${id}`);

      const checkboxItem = document.createElement('input');
      checkboxItem.setAttribute('type', 'checkbox')
      checkboxItem.checked = done;
      if (done) {
          listItemElem.classList.add('list__item_done');
      }
      checkboxItem.classList.add('list__item-checkbox');


      listItemElem.append(checkboxItem, text);

      return listItemElem;
  });

  listElem.append(...listItemsElems);
};

renderListItems(todos);


const checkDoneToDo= (event)=>{ 

const checkTarget = event.target;
if(checkTarget.tagName != 'INPUT') return;

const getId  = todos.find(elem => elem.id === +checkTarget.parentElement.id);
getId.done = checkTarget.checked;

listElem.innerHTML ='';
renderListItems(todos);

};

listElem.addEventListener('click',checkDoneToDo);

const createNewToDo= () =>{
if(inputElem.value =='') return;
todos.unshift({
  id: todos.length +1,
  text: inputElem.value,
  done:false,

});

inputElem.value='';
listElem.innerHTML='';
renderListItems(todos);

};

btnElem.addEventListener('click',createNewToDo);


document.addEventListener('DOMContentLoaded',()=>{
    listItemElem();

    createNewToDo();

});
const onStorageChange= e =>{
    if(e.key ==='taskList'){
        listItemElem();
    }
};

window.addEventListener('storage',onStorageChange);