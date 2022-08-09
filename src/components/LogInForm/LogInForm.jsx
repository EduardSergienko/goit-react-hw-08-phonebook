import TextField from '@mui/material/TextField';
import styles from './LogInForm.module.scss';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
export function LoginForm() {
  const CssTextField = styled(TextField)({
    width: 250,
    marginBottom: 10,
    ' &:last-child': {
      marginBottom: 0,
    },
  });
  return (
    <div className={styles.logInFormWrap}>
      <form className={styles.logInForm}>
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
        <Button variant="text">Log In</Button>
      </form>
    </div>
  );
}
