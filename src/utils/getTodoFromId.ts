// import { useContext } from "react";
// import { MainContext } from "../contexts/MainContext";
import { Context } from '../interfaces/Context';
import Todo from '../interfaces/Todo';

// const Context = useContext(MainContext)

const GetTodoFromId = (_id: string, Context: Context): Todo | undefined => {
  return Context?.AllTodo.get(_id);
};

export default GetTodoFromId;
