import Todo from './Todo';

export interface Context {
  AllTodo: Map<string, Todo>;
  AllDoneTodo: Map<string, Todo>;
  AddNewTodo: (Todo: Todo) => void;
  EditTodo: (_id: string, Todo: Todo) => void;
  DeleteTodo: (_id: string) => void;
  DoneTodo: (_id: string, Todo: Todo) => void;
}
