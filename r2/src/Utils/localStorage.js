import { v4 as uuidv4 } from 'uuid';


const read = key => {
    const data = localStorage.getItem(key);
    if (null === data) {
        return [];
    }
    return JSON.parse(data);
}

const write = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

//CRUD

export const crudRead = key => {
    return read(key);
}

export const crudCreate = (key, data) => {
    data.id = uuidv4();
    write(key, [...read(key), data]);
}

export const crudUpdate = (key, data, id) => {
    write(key, read(key).map(d => d.id === id ? { ...d, ...data, id: d.id } : { ...d }));
}

export const crudDelete = (key, id) => {
    write(key, read(key).filter(d => d.id !== id));
}