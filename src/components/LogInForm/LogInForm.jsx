import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { logInUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();

    dispatch(logInUser({ email, password }));
  };
  return (
    <Box
      component="form"
      sx={{
        width: 300,
        margin: '0 auto',
        paddingTop: '100px',
        textAlign: 'center',
      }}
      onSubmit={onFormSubmit}
    >
      <TextField
        sx={{
          marginBottom: 2,
          width: 300,
        }}
        label="Email"
        type="text"
        name="email"
        value={email}
        autoComplete="off"
        onChange={handleChange}
        required={true}
      />
      <TextField
        sx={{
          marginBottom: 2,
          width: 300,
        }}
        label="Password"
        type="Password"
        name="password"
        autoComplete="off"
        value={password}
        onChange={handleChange}
        required={true}
      />
      <Button
        sx={{
          fontWeight: 600,
          color: 'cornflowerblue',
        }}
        type="submit"
        variant="text"
      >
        Log In
      </Button>
    </Box>
  );
}
