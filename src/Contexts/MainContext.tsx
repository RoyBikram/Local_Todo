// ---------External----------//
import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';
// ---------Internal----------//
import { Context } from '../Interfaces/Context';
import Todo from '../Interfaces/Todo';

const MainContext = createContext<Context | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [AllTodo, setAllTodo] = useState<Map<string, Todo>>(new Map([]));
  const [AllDoneTodo, setAllDoneTodo] = useState<Map<string, Todo>>(
    new Map([]),
  );

  const addNewTodo = (Todo: Todo): void => {
    setAllTodo((LatestAllTodo: Map<string, Todo>): Map<string, Todo> => {
      LatestAllTodo.set(Todo._id, Todo);
      const deepCopy = new Map<string, Todo>(
        JSON.parse(JSON.stringify(Array.from(LatestAllTodo))),
      );
      return deepCopy;
    });
  };

  const editTodo = (_id: string, Todo: Todo): void => {
    setAllTodo((LatestAllTodo: Map<string, Todo>): Map<string, Todo> => {
      LatestAllTodo.set(_id, Todo);
      const deepCopy = new Map<string, Todo>(
        JSON.parse(JSON.stringify(Array.from(LatestAllTodo))),
      );
      return deepCopy;
    });
  };
  const deleteTodo = (_id: string): void => {
    setAllTodo((LatestAllTodo: Map<string, Todo>): Map<string, Todo> => {
      LatestAllTodo.delete(_id);
      const deepCopy = new Map<string, Todo>(
        JSON.parse(JSON.stringify(Array.from(LatestAllTodo))),
      );
      return deepCopy;
    });
  };
  const doneTodo = (_id: string, Todo: Todo): void => {
    setAllTodo((LatestAllTodo: Map<string, Todo>): Map<string, Todo> => {
      LatestAllTodo.delete(_id);
      const deepCopy = new Map<string, Todo>(
        JSON.parse(JSON.stringify(Array.from(LatestAllTodo))),
      );
      return deepCopy;
    });
    setAllDoneTodo(
      (LatestAllDoneTodo: Map<string, Todo>): Map<string, Todo> => {
        LatestAllDoneTodo.set(Todo._id, Todo);
        const deepCopy = new Map<string, Todo>(
          JSON.parse(JSON.stringify(Array.from(LatestAllDoneTodo))),
        );
        return deepCopy;
      },
    );
  };
  const ContextValue: Context = {
    AllTodo,
    AllDoneTodo,
    addNewTodo,
    editTodo,
    deleteTodo,
    doneTodo,
  };
  return (
    <MainContext.Provider value={ContextValue}>{children}</MainContext.Provider>
  );
};

export default MainContext;
