const todos = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];



const renderListItems = listItems => {
  const listElem = document.querySelector('.list');

  const listItemsElems = listItems.map(({ text, done }) => {

      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

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
// const todos = [
//     { text: 'Buy milk', done: false },
//     { text: 'Pick up Tom from airport', done: false },
//     { text: 'Visit party', done: false },
//     { text: 'Visit doctor', done: true },
//     { text: 'Buy meat', done: true },
// ];

// const renderListItems = listItems =>{
//   const listElem= document.querySelector('.list');

//   const listItemsElems = listItems.map(({text , done}) => {

//     const listItemElem = document.createElement('li');
//     listItemElem.classList.add('list__item');

//     const checkboxElem = document.createElement('input');
//     checkboxElem.setAttribute('type','checkbox');
//     checkboxElem.checked=done;
//     if(done) {
//     checkboxElem.classList.add('list__item-done');

//     }
//     checkboxElem.classList.add('list__item-checkbox');


//     listItemElem.append(checkboxElem,text);

//     return listItemElem;
   

//   });
//    listElem.append(...listItemElems)
 
// };
// renderListItems(tasks);