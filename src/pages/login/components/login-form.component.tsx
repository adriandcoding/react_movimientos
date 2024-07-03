import React from "react";
import { Credentials, createEmptyCredentials } from "../login.vm";

interface LoginProps {
  onLogin: (credentials: Credentials) => void;
}
export const LoginFormComponent: React.FC<LoginProps> = (props) => {
  const { onLogin } = props;
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );
  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onLogin(credentials);
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
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleFieldChange}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
