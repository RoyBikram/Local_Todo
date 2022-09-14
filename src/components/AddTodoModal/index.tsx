import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  width: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  borderRadius: '10px',
  boxSizing: 'border-box',
};

interface AddTodoModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function AddTodoModal({ open, handleClose }: AddTodoModalProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Add new todo
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
            />
            <FormControl required>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Select the type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="work"
                  control={<Radio />}
                  label="Work"
                />
                <FormControlLabel
                  value="personal"
                  control={<Radio />}
                  label="Personal"
                />
              </RadioGroup>
            </FormControl>

            <Button
              type="submit"
              sx={{ width: 'fit-content', mx: 'auto', px: 5 }}
            >
              <CheckRoundedIcon sx={{ fontSize: 30 }} />
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
