import React from "react";
import classes from "./header.component.module.css";

export const HeaderComponent: React.FC = () => {
  return (
    <header className={classes.header}>
      <div>
        <img
          src="assets/logo_header_white.svg"
          className={classes.headerLogo}
          alt="company logo"
        />
        <div className={classes.headerText}>
          <img src="assets/icon-user.svg" alt="" />
          <p>Welcome, John Doe</p>
        </div>
      </div>
    </header>
  );
};
