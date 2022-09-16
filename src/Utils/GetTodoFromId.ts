// ---------Internal----------//
import { Context } from '../Interfaces/Context';
import Todo from '../Interfaces/Todo';

const getTodoFromId = (_id: string, Context: Context): Todo | undefined => {
  return Context?.AllTodo.get(_id);
};

export default getTodoFromId;
