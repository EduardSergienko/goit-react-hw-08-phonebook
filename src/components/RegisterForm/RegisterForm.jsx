import TextField from '@mui/material/TextField';
import styles from './RegisterForm.module.scss';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
export function RegisterForm() {
  const CssTextField = styled(TextField)({
    width: 250,
    marginBottom: 10,
    ' &:last-child': {
      marginBottom: 0,
    },
  });
  return (
    <div className={styles.registerFormWrap}>
      <form className={styles.registerForm}>
        <CssTextField
          sx={{
            display: 'block',
          }}
          label="Name"
          type="text"
          name="name"
          autoComplete="off"
        />
        <CssTextField
          sx={{
            display: 'block',
          }}
          label="Email"
          type="text"
          name="name"
          autoComplete="off"
        />
        <CssTextField
          sx={{
            display: 'block',
          }}
          label="Password"
          type="Password"
          name="name"
          autoComplete="off"
        />
        <Button variant="text">Register</Button>
      </form>
    </div>
  );
}
