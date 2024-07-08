import React from "react";
import { LoginFormComponent } from "./components/login-form.component";
import { Credentials } from "./login.vm";
import { useNavigate } from "react-router-dom";
import { isValidLogin } from "./api";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { appRoutes } from "@/core/router";
import classes from "./login.page.module.css";
import { useUserContext } from "@/core/profile";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { setUserProfile } = useUserContext();

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials);

    isValidLogin(apiCredentials).then((isValid) => {
      if (isValid) {
        setUserProfile(credentials.username);
        navigate(appRoutes.accountList);
      } else {
        alert("Please check your username and password and try again.");
      }
    });
  };
  return (
    <>
      <header className={classes.header}>
        <img
          src="assets/logo_header.svg"
          alt="company logo"
          className={classes.logo}
        />
      </header>

      <div className={classes.bgImg}></div>
      <div className={classes.box}>
        <h1>Access</h1>
        <LoginFormComponent onLogin={handleSubmit} />
        <h4 className={classes.inputFooter}>Security is our top priority</h4>
      </div>
    </>
  );
};
