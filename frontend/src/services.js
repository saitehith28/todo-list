import axios from 'axios';

// export const syncLocalStorage = (tasks) => {
//     window.localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// export const readLocalStorage = () => {
//     const res = window.localStorage.getItem('tasks');
//     if (!res) {
//         return [];
//     }
//     return JSON.parse(res);
// };

const BASE_URL = 'http://localhost:3001/tasks';

export const getAllTasks = () => {
    return axios
        .get(BASE_URL)
        .then(res => res.data);
}

export const addTask = (task) => {
    return axios
        .post(BASE_URL, task)
        .then(res => res.data);
}

export const deleteTask = (id) => {
    return axios
        .delete(`${BASE_URL}/${id}`)
        .then(res => res.data);
}

export const updateTask = (id, task) => {
    return axios
        .put(`${BASE_URL}/${id}`, task)
        .then(res => res.data);
}