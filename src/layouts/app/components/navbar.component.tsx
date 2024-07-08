import { appRoutes } from "@/core/router";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavBarComponent: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li className={classes.selected}>
          <Link to={appRoutes.accountList}>Accounts</Link>
        </li>
        <li className={classes.selected}>
          <Link to={appRoutes.transfer}>Transfers</Link>
        </li>
      </ul>
    </nav>
  );
};
