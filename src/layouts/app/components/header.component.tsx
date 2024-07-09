import React from "react";
import classes from "./header.component.module.css";
import { useUserContext } from "@/core/profile";
import { Link, generatePath } from "react-router-dom";

import { appRoutes } from "@/core/router";

export const HeaderComponent: React.FC = () => {
  const { username } = useUserContext();
  return (
    <header className={classes.header}>
      <div>
        <Link to={generatePath(appRoutes.accountList)}>
          <img
            src="assets/logo_header_white.svg"
            className={classes.headerLogo}
            alt="company logo"
          />
        </Link>
        <div className={classes.headerText}>
          <img src="assets/icon-user.svg" alt="icon of user" />
          <p>Hello,{username}</p>
        </div>
      </div>
    </header>
  );
};
