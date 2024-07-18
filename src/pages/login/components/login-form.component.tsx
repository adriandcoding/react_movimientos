import React from "react";
import {
  Credentials,
  CredentialsFormErrors,
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

interface LoginProps {
  onLogin: (credentials: Credentials) => void;
}
export const LoginFormComponent: React.FC<LoginProps> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );
  const [errors, setErrors] = React.useState<CredentialsFormErrors>(
    createEmptyCredentialsFormErrors()
  );
  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationResult = validateForm(credentials);
    if (validationResult.succeeded) {
      onLogin(credentials);
    } else {
      setErrors(validationResult.errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleFieldChange}
          placeholder="Username"
          className={errors.username ? classes.input_error : ""}
        />
        {errors.username && <p className={classes.error}>{errors.username}</p>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleFieldChange}
          placeholder="Password"
          className={errors.password ? classes.input_error : ""}
        />
        {errors.password && <p className={classes.error}>{errors.password}</p>}
      </div>

      <button type="submit" className={classes.button}>
        Login
      </button>
    </form>
  );
};
/*comentario prueba*/
