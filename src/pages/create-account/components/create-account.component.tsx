import React from "react";
import classes from "./create-account.component.module.css";
import { Account } from "../create-account.page.vm";
interface Props {
  account: Account;
  createAccount: (account: Account) => void;
}
export const CreateAccountFormComponent: React.FC<Props> = () => {
  return (
    <div>
      <div className={classes.formContainer}>
        <form action=" ">
          <div>
            <label htmlFor="accountType">Tipo de cuenta</label>
            <select name="AccountId" value={1} className={classes.medium}>
              <option value="">Seleccione el tipo de cuenta</option>
              <option value="1">Cuenta Corriente</option>
              <option value="2">Cuenta de Ahorro</option>
              <option value="3">Cuenta de Nómina</option>
            </select>
          </div>
          <div>
            <label htmlFor="iban">Alias</label>
            <input
              type="text"
              name="alias"
              id=""
              placeholder="Nombre de la cuenta"
              className={classes.medium}
            />
          </div>
        </form>
      </div>
      <div className={classes.botonContainer}>
        <button type="submit">GUARDAR</button>
      </div>
    </div>
  );
};
