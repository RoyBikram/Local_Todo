// ---------External----------//
import React, { useState } from 'react';
import styled from '@emotion/styled';
// ---------Internal----------//
import Title from '../../Components/Title';
import TodoCard from './Components/TodoCard';
import AddTodoButton from '../../Components/AddTodoButton';
import Todo from '../../Interfaces/Todo';
import { MainContext } from '../../Contexts/MainContext';
import { Context } from '../../Interfaces/Context';

export default function Home() {
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

  const Container = styled.div`
    max-width: 500px;
    width: 100%;
    height: 700px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 10px;
    position: relative;
    @media only screen and (max-height: 750px) {
      height: 97%;
    }
  `;

  const ContextValue: Context = {
    AllTodo,
    AllDoneTodo,
    addNewTodo,
    editTodo,
    deleteTodo,
    doneTodo,
  };

  return (
    <MainContext.Provider value={ContextValue}>
      <Container>
        <Title />
        <TodoCard />
        <AddTodoButton />
      </Container>
    </MainContext.Provider>
  );
}
