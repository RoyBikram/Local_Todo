// ---------External----------//
import React from 'react';
import { IconButton } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { blue } from '@mui/material/colors';
// ---------Internal----------//
import AddTodoModal from './AddTodoModal';

interface EditTodoButtonProps {
  _id: string;
  title: string;
  type: string;
}

export default function EditTodoButton({
  _id,
  title,
  type,
}: EditTodoButtonProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{ color: blue[500] }}
        aria-label="edit"
      >
        <EditRoundedIcon sx={{ fontSize: 24 }} />
      </IconButton>
      <AddTodoModal
        open={open}
        handleClose={handleClose}
        _id={_id}
        title={title}
        type={type}
      />
    </>
  );
}
