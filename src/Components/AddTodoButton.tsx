// ---------External----------//
import React from 'react';
import { Fab, IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
// ---------Internal----------//
import AddTodoModal from './AddTodoModal';

export default function AddTodoButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Fab
        onClick={handleOpen}
        size="medium"
        color="primary"
        aria-label="add"
        sx={{
          position: 'absolute',
          bottom: '24px',
          right: '50%',
          transform: 'translateX(50%)',
        }}
      >
        <AddRoundedIcon sx={{ fontSize: 30 }} />
      </Fab>
      <AddTodoModal open={open} handleClose={handleClose} />
    </>
  );
}
