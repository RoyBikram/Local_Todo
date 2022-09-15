// ---------Internal----------//
import Todo from './Todo';

export interface Context {
  AllTodo: Map<string, Todo>;
  AllDoneTodo: Map<string, Todo>;
  addNewTodo: (Todo: Todo) => void;
  editTodo: (_id: string, Todo: Todo) => void;
  deleteTodo: (_id: string) => void;
  doneTodo: (_id: string, Todo: Todo) => void;
}
