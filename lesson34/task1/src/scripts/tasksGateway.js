const baseUrl = 'https://crudcrud.com/api/5d4859d709214ce19d87ba7c4e0bac37/tasks';

const mapTasks = tasks =>
    tasks.map(({ _id, ...rest }) => ({...rest, id: _id }))

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks))
};

export const creatTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData)
    })

};


export const updateTask = (taskId, updateTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updateTaskData)
    })

};

export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })

};

