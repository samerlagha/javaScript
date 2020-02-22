import {getItem, setItem} from './storage.js';

const listElem = document.querySelector('.list');

// const tasks = [
//     { text: 'Buy milk', done: false, createDate: '2019-10-24T15:51:32.222Z', finishDate: null, id: '1' },
//     { text: 'Pick up Tom from airport', done: false, createDate: '2019-10-25T15:51:32.222Z', finishDate: null, id: '2' },
//     { text: 'Visit party', done: false, createDate: '2019-10-26T15:51:32.222Z', finishDate: null, id: '3' },
//     { text: 'Visit doctor', done: true, createDate: '2019-10-27T15:51:32.222Z', finishDate: '2019-11-27T15:51:32.222Z', id: '4' },
//     { text: 'Buy meat', done: true, createDate: '2019-10-28T15:51:32.222Z', finishDate: '2019-11-28T15:51:32.222Z', id: '5' },
// ];

const compareTasks = (a, b) => {
    if (a.done - b.done !== 0) {
        return a.done - b.done;
    };

    if (a.done) {
        return new Date(b.finishDate) - new Date(a.finishDate);
    }

    return new Date(b.createDate) - new Date(a.createDate);
};

const createCheckbox = ({ done, id }) => {
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.setAttribute('data-id', id);
    checkboxElem.checked = done;
    checkboxElem.classList.add('list__item-checkbox');

    return checkboxElem;
}

const createListItem = ({ text, done, id }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkboxElem = createCheckbox({ done, id });
    if (done) {
        listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkboxElem, text);

    return listItemElem;
}

export const renderTasks = () => {
    const tasksList = getItem('tasksList') || [];

    listElem.innerHTML = '';
    const tasksElem = tasksList
        .sort(compareTasks)
        .map(createListItem);

    listElem.append(...tasksElem);
};


