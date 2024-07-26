import { AppLayout } from "@/layouts";
import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./create-account.page.module.css";
import { CreateAccountFormComponent } from "./components/create-account.component";
import { CreateAccount } from "./create-account.page.vm";
import { mapAccountFromApiToVm } from "./create-account.mapper";
import { saveAccount } from "./api/create-account.api";

export const CreateAccounts: React.FC = () => {
  const navigate = useNavigate();
  const handleCreateAccount = (CreateAccount: CreateAccount) => {
    const apiCreateAccount = mapAccountFromApiToVm(CreateAccount);
    saveAccount(apiCreateAccount).then((succeeded) => {
      if (succeeded) {
        alert("La cuenta fue creada exitosamente!");
        navigate("/account-list");
      } else {
        alert("La cuenta no pudo crearse");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.headerContainer}>
        <h1 className={classes.titleContainer}>Cuenta Bancaria</h1>
        <CreateAccountFormComponent createAccount={handleCreateAccount} />
      </div>
    </AppLayout>
  );
};
