import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { registerUser } from 'redux/auth/authOperations';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      sx={{
        width: 300,
        margin: '0 auto',
        paddingTop: 5,
        textAlign: 'center',
      }}
      onSubmit={onFormSubmit}
    >
      <TextField
        sx={{
          marginBottom: 2,
          width: 300,
        }}
        label="Name"
        type="text"
        name="name"
        autoComplete="off"
        onChange={handleChange}
        value={name}
      />
      <TextField
        sx={{
          marginBottom: 2,
          width: 300,
        }}
        label="Email"
        type="text"
        name="email"
        autoComplete="off"
        value={email}
        onChange={handleChange}
      />
      <TextField
        sx={{
          marginBottom: 2,
          width: 300,
        }}
        label="Password"
        type="password"
        name="password"
        autoComplete="off"
        value={password}
        onChange={handleChange}
      />
      <Button type="submit" variant="text">
        Sing Up
      </Button>
    </Box>
  );
}
