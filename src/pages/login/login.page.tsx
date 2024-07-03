import React from "react";
import { LoginFormComponent } from "./components/login-form.component";
import { Credentials } from "./login.vm";
import { useNavigate } from "react-router-dom";
import { isValidLogin } from "./api";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { appRoutes } from "@/core/router";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials);

    isValidLogin(apiCredentials).then((isValid) => {
      if (isValid) {
        navigate(appRoutes.accountList);
      } else {
        alert("Invalid credentials");
      }
    });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <LoginFormComponent onLogin={handleSubmit} />
    </div>
  );
};
