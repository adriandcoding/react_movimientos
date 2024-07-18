import React from "react";
import classes from "./footer.component.module.css";
import logoHeader from "/assets/logo_header_white.svg";

export const FooterComponent: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <img
        src={logoHeader}
        alt="logo footer of company"
        className={classes.footerLogo}
      />
    </footer>
  );
};
