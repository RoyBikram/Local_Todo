// ---------External----------//
import React from 'react';
import styled from '@emotion/styled';
// ---------Internal----------//
import Title from '../../Components/Title';
import TodoCard from './Components/TodoCard';
import AddTodoButton from '../../Components/AddTodoButton';
import { ContextProvider } from '../../Contexts/MainContext';

export default function Home() {
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

  return (
    <ContextProvider>
      <Container>
        <Title />
        <TodoCard />
        <AddTodoButton />
      </Container>
    </ContextProvider>
  );
}
