import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { blue, grey, pink } from '@mui/material/colors';

interface TitleProps {
  children?: string;
}

export default function Title({ children }: TitleProps) {
  return (
    <Typography
      sx={{
        p: 1.5,
        m: 1,
        borderRadius: 2,
        color: grey[800],
        fontWeight: 500,
        textAlign: 'center',
      }}
      variant="h6"
    >
      {children}
    </Typography>
  );
}
