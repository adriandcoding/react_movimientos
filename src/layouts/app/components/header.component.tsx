import React from "react";
import classes from "./header.component.module.css";
import { useUserContext } from "@/core/profile";

export const HeaderComponent: React.FC = () => {
  const { username } = useUserContext();
  return (
    <header className={classes.header}>
      <div>
        <img
          src="assets/logo_header_white.svg"
          className={classes.headerLogo}
          alt="company logo"
        />
        <div className={classes.headerText}>
          <img src="assets/icon-user.svg" alt="icon of user" />
          <p>Hello,{username}</p>
        </div>
      </div>
    </header>
  );
};
