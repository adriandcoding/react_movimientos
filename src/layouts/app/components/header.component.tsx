import React from "react";
import classes from "./header.component.module.css";
import { useUserContext } from "@/core/profile";
import { Link, generatePath } from "react-router-dom";
import logoHeader from "/assets/logo_header_white.svg";
import iconUser from "/assets/icon-user.svg";
import { appRoutes } from "@/core/router";

export const HeaderComponent: React.FC = () => {
  const { username } = useUserContext();
  return (
    <header className={classes.header}>
      <div>
        <Link to={generatePath(appRoutes.accountList)}>
          <img
            src={logoHeader}
            className={classes.headerLogo}
            alt="company logo"
          />
        </Link>
        <div className={classes.headerText}>
          <img src={iconUser} alt="icon of user" />
          <p>Hola,{username}</p>
        </div>
      </div>
    </header>
  );
};
