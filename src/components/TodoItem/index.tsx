import React from 'react';
import { Box, Checkbox, Divider, IconButton, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import styled from '@emotion/styled';
import { blue, green, grey, red } from '@mui/material/colors';
export default function TodoItem() {
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
      <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
      <Divider
        sx={{ ml: '4px' }}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <TextContainer>
        <HomeRoundedIcon sx={{ color: grey[400], alignSelf: 'flex-start' }} />
        <Typography sx={{ color: grey[800], mt: '2px' }}>
          Your To Do Here
        </Typography>
      </TextContainer>
      <IconButton sx={{ color: blue[600] }} aria-label="edit">
        <EditRoundedIcon />
      </IconButton>
      <IconButton sx={{ color: red[400] }} aria-label="delete">
        <DeleteRoundedIcon />
      </IconButton>
    </Container>
  );
}
