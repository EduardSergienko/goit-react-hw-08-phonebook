import styles from './RegisterForm.module.scss';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { registerUser } from 'redux/auth/authOperations';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
export default function RegisterForm() {
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
      <div className={styles.signWrap}>
        <h2 className={styles.signUpTitle}>Sign Up</h2>
        <p className={styles.signUpText}>Already a mamber?</p>
        <Link to="/login" className={styles.signUpLink}>
          Log In
        </Link>
      </div>
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
        required={true}
      />
      <TextField
        sx={{
          marginBottom: 2,
          width: 300,
        }}
        label="Email"
        type="email"
        name="email"
        autoComplete="off"
        value={email}
        onChange={handleChange}
        required={true}
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
        required={true}
      />
      <Button
        sx={{
          width: '100%',
          fontWeight: 600,
          color: 'cornflowerblue',
        }}
        type="submit"
        variant="text"
      >
        Sign Up
      </Button>
    </Box>
  );
}
