import {onCreateTask} from './createTask.js';
import {onToggleTask} from './updateTask.js';
import {onDeleteTask} from './deleteTask.js';

export const initTodoListHandlers = () => {
    const createBtnElem = document.querySelector('.create-task-btn');
    createBtnElem.addEventListener('click', onCreateTask);

    const todoListItem = document.querySelector('.list');
    todoListItem.addEventListener('click', onToggleTask);
    todoListItem.addEventListener('click', onDeleteTask);
}
