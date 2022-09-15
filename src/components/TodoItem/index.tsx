import React, { useContext } from 'react';
import { Box, Checkbox, Divider, IconButton, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import styled from '@emotion/styled';
import { blue, green, grey, red } from '@mui/material/colors';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import Todo from '../../interfaces/Todo';
import EditTodoButton from '../EditTodoButton';
import { MainContext } from '../../contexts/MainContext';

export default function TodoItem({ _id, title, type }: Todo) {
  const Context = useContext(MainContext);
  const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${blue[50]};
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
      <Checkbox
        onChange={() => {
          Context?.DoneTodo(_id, { _id, title, type });
        }}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
      />
      <Divider
        sx={{ ml: '4px' }}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <TextContainer>
        {type === 'work' ? (
          <WorkRoundedIcon sx={{ color: grey[400], alignSelf: 'flex-start' }} />
        ) : (
          <HomeRoundedIcon sx={{ color: grey[400], alignSelf: 'flex-start' }} />
        )}
        <Typography sx={{ color: grey[800], mt: '2px' }}>{title}</Typography>
      </TextContainer>
      <EditTodoButton _id={_id} title={title} type={type} />
      <IconButton
        sx={{ color: red[400] }}
        aria-label="delete"
        onClick={() => {
          Context?.DeleteTodo(_id);
        }}
      >
        <DeleteRoundedIcon />
      </IconButton>
    </Container>
  );
}
