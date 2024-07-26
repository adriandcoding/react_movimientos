import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./create-account.page.module.css";
import { CreateAccountFormComponent } from "./components/create-account.component";

export const CreateAccount: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.headerContainer}>
        <h1 className={classes.titleContainer}>Cuenta Bancaria</h1>
        <CreateAccountFormComponent />
      </div>
    </AppLayout>
  );
};
