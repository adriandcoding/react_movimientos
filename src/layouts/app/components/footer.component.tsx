import React from "react";
import classes from "./footer.component.module.css";

export const FooterComponent: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <img
        src="public/assets/logo_footer.svg"
        alt="logo footer of company"
        className={classes.footerLogo}
      />
    </footer>
  );
};
