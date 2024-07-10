import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

const NavLink: React.FC<{
  to: string;
  label: string;
  selectedPath: string;
}> = ({ to, label, selectedPath }) => {
  const { pathname } = useLocation();
  const isSelected = pathname === selectedPath;

  return (
    <li className={isSelected ? classes.selected : ""}>
      <Link to={to}>{label}</Link>
    </li>
  );
};

export const NavBarComponent: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <NavLink
          to={appRoutes.accountList}
          label="Accounts"
          selectedPath={routesPrefixes.accountList}
        />
        <NavLink
          to={appRoutes.movements}
          label="Movimientos"
          selectedPath={routesPrefixes.movements}
        />
        <NavLink
          to={appRoutes.transfer}
          label="Transfers"
          selectedPath={routesPrefixes.transfer}
        />
      </ul>
    </nav>
  );
};
