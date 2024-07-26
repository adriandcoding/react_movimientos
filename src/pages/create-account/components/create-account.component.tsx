import React from "react";
import classes from "./create-account.component.module.css";
import { validateForm } from "../validations/create-account-form.validation";
import {
  Account,
  CreateAccountErrors,
  createEmptyAccount,
  createEmptyAccountErrors,
  CreateAccount,
} from "../create-account.page.vm";
interface Props {
  createAccount: (account: CreateAccount) => void;
}
export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { createAccount } = props;

  const [account, setAccount] = React.useState<Account>(createEmptyAccount());

  const [errors, setErrors] = React.useState<CreateAccountErrors>(
    createEmptyAccountErrors()
  );

  const handleFieldChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationResult = validateForm(account);
    if (validationResult.succeeded) {
      createAccount(account);
    } else {
      setErrors(validationResult.errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label htmlFor="accountType">Tipo de cuenta</label>
            <select
              name="type"
              value={account.type}
              className={classes.medium}
              onChange={handleFieldChange}
            >
              <option value="">Seleccione el tipo de cuenta</option>
              <option value="1">Cuenta Corriente</option>
              <option value="2">Cuenta de Ahorro</option>
              <option value="3">Cuenta de Nómina</option>
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label htmlFor="iban">Alias</label>
            <input
              onChange={handleFieldChange}
              name="name"
              placeholder="Nombre de la cuenta"
              className={classes.medium}
              value={account.name}
            />
            <p className={classes.error}>{errors.type}</p>
          </div>
        </div>

        <div className={classes.botonContainer}>
          <button type="submit">GUARDAR</button>
        </div>
      </form>
    </div>
  );
};
