import React from "react";
import {
  Credentials,
  CredentialsFormErrors,
  createEmptyCredentials,
  createEmptyCredentialsFormErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";

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
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleFieldChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleFieldChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
