import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavBarComponent: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbarList}>
        <li
          className={
            pathname.startsWith(`${routesPrefixes.accountList}`) ||
            pathname.startsWith(`${routesPrefixes.createAccount}`)
              ? classes.selected
              : ""
          }
        >
          {" "}
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        <li
          className={
            pathname.startsWith(routesPrefixes.transfer) ? classes.selected : ""
          }
        >
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
