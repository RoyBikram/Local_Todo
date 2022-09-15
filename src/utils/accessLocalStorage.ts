import Todo from '../interfaces/Todo';
const LocalStorage = window.localStorage;
export const setToLocalStorage = (_id: string, data: Todo): void => {
  LocalStorage.setItem(_id, JSON.stringify(data));
};
