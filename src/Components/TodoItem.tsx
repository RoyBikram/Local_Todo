// ---------External----------//
import React, { useContext } from 'react';
import { Checkbox, Divider, IconButton, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import styled from '@emotion/styled';
import { blue, grey, purple, red } from '@mui/material/colors';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
// ---------Internal----------//
import EditTodoButton from './EditTodoButton';
import MainContext from '../Contexts/MainContext';

interface TodoItemProps {
  _id: string;
  title: string;
  type: string;
  IsDynamic: boolean;
}

export default function TodoItem({
  _id,
  title,
  type,
  IsDynamic,
}: TodoItemProps) {
  const Context = useContext(MainContext);
  const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${type === 'work' ? blue[50] : purple[50]};
    border-radius: 10px;
    padding: 4px;
    height: min-content;
  `;
  const TextContainer = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin: 12px;
    gap: 8px;
  `;
  return (
    <Container>
      {IsDynamic ? (
        <>
          <Checkbox
            onChange={() => {
              Context?.doneTodo(_id, { _id, title, type });
            }}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
          />
          <Divider
            sx={{ ml: '4px' }}
            orientation="vertical"
            variant="middle"
            flexItem
          />
        </>
      ) : (
        <></>
      )}
      <TextContainer>
        {type === 'work' ? (
          <WorkRoundedIcon
            sx={{ color: grey[500], fontSize: '20px', alignSelf: 'flex-start' }}
          />
        ) : (
          <HomeRoundedIcon sx={{ color: grey[500], alignSelf: 'flex-start' }} />
        )}
        <Typography sx={{ color: grey[800] }}>{title}</Typography>
      </TextContainer>
      {IsDynamic ? (
        <>
          <EditTodoButton _id={_id} title={title} type={type} />
          <IconButton
            sx={{ color: red[400] }}
            aria-label="delete"
            onClick={() => {
              Context?.deleteTodo(_id);
            }}
          >
            <DeleteRoundedIcon />
          </IconButton>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}
