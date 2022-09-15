import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Logo from '../../assets/img/logo.png';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 8px;
  display: grid;
  place-items: center;

`

export default function Title() {
  return (
    <Container>
      <Box sx={{ height: 34, width: 'auto' }} component="img" src={Logo}></Box>
    </Container>
  );
}
