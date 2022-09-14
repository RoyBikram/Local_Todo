import React from 'react';
import styled from '@emotion/styled';
import Title from '../../components/Title';
import TodoCard from './components/TodoCard';
import AddTodoButton from '../../components/AddTodoButton';

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
    <Container>
      <Title>Todo</Title>
      <TodoCard />
      <AddTodoButton />
    </Container>
  );
}
