import React from 'react';
import Home from './pages/Home';
import styled from '@emotion/styled';
import './global.css';

function App() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  `;
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
