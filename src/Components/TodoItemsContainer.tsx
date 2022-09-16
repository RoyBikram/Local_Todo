// ---------External----------//
import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';
import React, { useContext, useEffect, useState } from 'react';
// ---------Internal----------//
import MainContext from '../Contexts/MainContext';
import TodoItem from './TodoItem';
import Todo from '../Interfaces/Todo';

interface TodoItemsContainerProps {
  variant: 'all' | 'work' | 'personal' | 'done';
}

export default function TodoItemsContainer({
  variant,
}: TodoItemsContainerProps) {
  const [AllTodoArray, setAllTodoArray] = useState<Todo[]>([]);
  const [IsDynamic, setIsDynamic] = useState<boolean>(false);
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
    switch (variant) {
      case 'all': {
        if (Context?.AllTodo) {
          setAllTodoArray(
            Array.from(Context?.AllTodo, ([key, value]) => value).reverse(),
          );
          setIsDynamic(true);
        }
        break;
      }
      case 'work': {
        if (Context?.AllTodo) {
          setAllTodoArray(
            Array.from(Context?.AllTodo, ([key, value]) => value)
              .filter((each) => each.type === 'work')
              .reverse(),
          );
          setIsDynamic(true);
        }
        break;
      }
      case 'personal': {
        if (Context?.AllTodo) {
          setAllTodoArray(
            Array.from(Context?.AllTodo, ([key, value]) => value)
              .filter((each) => each.type === 'personal')
              .reverse(),
          );
          setIsDynamic(true);
        }
        break;
      }
      case 'done': {
        if (Context?.AllDoneTodo) {
          setAllTodoArray(
            Array.from(Context?.AllDoneTodo, ([key, value]) => value).reverse(),
          );
          setIsDynamic(false);
        }
        break;
      }

      default:
        break;
    }
  }, [Context]);
  return (
    <Container>
      {AllTodoArray.map((each) => (
        <TodoItem
          key={each._id}
          _id={each._id}
          title={each.title}
          type={each.type}
          IsDynamic={IsDynamic}
        />
      ))}
    </Container>
  );
}
