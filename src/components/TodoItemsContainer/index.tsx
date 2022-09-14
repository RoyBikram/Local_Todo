import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';
import React from 'react';
import TodoItem from '../TodoItem';

export default function TodoItemsContainer() {
  const Container = styled.div`
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background: ${grey[200]};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: ${grey[400]};
      transition: all 0.2s;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${grey[500]};
    }
  `;
  return (
    <Container>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </Container>
  );
}
