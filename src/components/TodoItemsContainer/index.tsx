import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';
import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../contexts/MainContext';
import TodoItem from '../TodoItem';
import Todo from '../../interfaces/Todo';
interface TodoItemsContainerProps {
  variant: 'all' | 'work' | 'personal' | 'done';
}

export default function TodoItemsContainer({
  variant,
}: TodoItemsContainerProps) {
  const [AllTodoArray, setAllTodoArray] = useState<Todo[]>([]);
  const Context = useContext(MainContext);
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
  useEffect(() => {
    if (Context?.AllTodo) {
      setAllTodoArray(Array.from(Context?.AllTodo, ([key, value]) => value));
    }
  }, []);
  return (
    <Container>
      {AllTodoArray.map((each) => (
        <TodoItem
          key={each._id}
          _id={each._id}
          title={each.title}
          type={each.type}
        />
      ))}
    </Container>
  );
}
