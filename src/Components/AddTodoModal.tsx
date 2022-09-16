// ---------External----------//
import React, { useContext } from 'react';
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
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
// ---------Internal----------//
import Todo from '../Interfaces/Todo';
import MainContext from '../Contexts/MainContext';

interface AddTodoModalProps {
  open: boolean;
  handleClose: () => void;
  _id?: string;
  title?: string;
  type?: string;
}

export default function AddTodoModal({
  open,
  handleClose,
  _id,
  title,
  type,
}: AddTodoModalProps) {
  const formRef = React.useRef<HTMLFormElement>(null);
  const Context = useContext(MainContext);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    formRef?.current?.reportValidity();
    event.preventDefault();
    const data: FormData = new FormData(event.currentTarget);
    title = String(data.get('title'));
    type = String(data.get('type'));
    if (_id) {
      if (typeof title === 'string' && typeof type === 'string') {
        const TodoData: Todo = {
          _id,
          title,
          type,
        };
        Context?.editTodo(_id, TodoData);
      }
    } else {
      if (typeof title === 'string' && typeof type === 'string') {
        const uid = uuidv4();
        const TodoData: Todo = {
          _id: uid,
          title,
          type,
        };
        Context?.addNewTodo(TodoData);
      }
      handleClose();
    }
  };

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
            {_id ? 'Edit your todo' : 'Add new todo'}
            {/* Add new todo */}
          </Typography>

          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              // value={title}
              defaultValue={title}
              autoFocus
            />
            <FormControl required>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Select the type
              </FormLabel>
              <RadioGroup
                defaultValue={`${type ? type : 'work'}`}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="type"
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
