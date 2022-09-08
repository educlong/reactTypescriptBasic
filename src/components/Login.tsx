/* eslint-disable @typescript-eslint/naming-convention */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from '@material-ui/core';
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Login = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  // datatype của handleClose xem tại Navbar, chính là useState: setLoginOpen ( # HC )
  handleClose: Dispatch<SetStateAction<boolean>>;
}) => {
  //useContext
  // const { authInfo, toggleAuth } = useContext(AuthContext);
  // we dont need to use authInfo
  const { toggleAuth } = useContext(AuthContext);
  //useState
  const [username, setUsername] = useState('');
  return (
    <React.StrictMode>
      <Dialog open={isOpen} onClose={() => handleClose(false)}>
        <DialogContent>
          <TextField
            label="Username"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setUsername(event.target.value)
            }
            value={username}
            required={true}
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              toggleAuth(username);
              setUsername('');
              handleClose(false);
            }}
            disabled={username === ''}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.StrictMode>
  );
};

export default Login;
