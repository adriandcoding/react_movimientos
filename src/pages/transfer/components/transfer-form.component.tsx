import {
  AccountVm,
  emptyTransfer,
  emptyTransferError,
  TransferError,
  TransferVm,
} from "../transfer.vm";
import { validateForm } from "../validations/transfer-form.validation";
import React from "react";
import classes from "./transfer-form.component.module.css";
interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId?: string;
}
export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer, defaultAccountId } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(emptyTransfer);
  const [error, setErrors] = React.useState<TransferError>(emptyTransferError);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationResult = validateForm(transfer);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onTransfer(transfer);
    }
  };

  React.useEffect(() => {
    if (defaultAccountId) {
      setTransfer({ ...transfer, accountId: defaultAccountId });
    }
  }, []);

  const handleFieldChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    {
      setTransfer({
        ...transfer,
        [event.target.name]: event.target.value,
      });
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label htmlFor="originAccount">Seleccione Cuenta de origen</label>
            <select
              name="accountId"
              onChange={handleFieldChange}
              className={classes.large}
              value={transfer.accountId}
            >
              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
              <option value="">Seleccione una cuenta</option>
            </select>
            <p className={classes.error}>{error.accountId}</p>
          </div>
          <div>
            <label htmlFor="destinationAccount">Cuenta de destino</label>
            <input
              type="text"
              name="iban"
              placeholder="IBAN"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{error.iban}</p>
          </div>
          <div>
            <label htmlFor="Beneficiario">Beneficiario</label>
            <input
              type="text"
              name="name"
              onChange={handleFieldChange}
              placeholder="Nombre del beneficiario"
              className={classes.large}
            />
            <p className={classes.error}>{error.name}</p>
          </div>
          <div>
            <label htmlFor="importe">Importe</label>
            <input
              placeholder="Importe"
              name="amount"
              onChange={handleFieldChange}
              className={classes.small}
            />
            <p className={classes.error}>{error.amount}</p>
          </div>
          <div>
            <label htmlFor="Concepto">Concepto</label>
            <input
              type="text"
              name="concept"
              id=""
              onChange={handleFieldChange}
              placeholder="Concepto de la transferencia"
              className={classes.large}
            />
            <p className={classes.error}>{error.concept}</p>
          </div>
          <div>
            <label htmlFor="Observaciones">Observaciones</label>
            <input
              type="text"
              name="notes"
              id=""
              onChange={handleFieldChange}
              placeholder="Observaciones adicionales"
              className={classes.large}
            />
            <p className={classes.error}>{error.notes}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div className={classes.dateMargin}>
            <p>
              Para que la transferencia se realice en otra fecha diferente a la
              de hoy, por favor indíquenos la fecha deseada:
            </p>

            <label htmlFor="fechaDeTransferencia">Fecha de ejecución</label>
            <input
              type="date"
              name="realDateTransfer"
              id=""
              onChange={handleFieldChange}
              className={classes.medium}
            />
            <p className={classes.error}>{error.realDateTransfer}</p>
          </div>
        </div>
        <div>
          <div className={classes.formContainer}>
            <div>
              <p>Escriba una dirección de email para avisar al beneficiario:</p>
              <div>
                <label htmlFor="email">Email del beneficiario</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  onChange={handleFieldChange}
                  placeholder="Correo electrónico del beneficiario"
                  className={classes.large}
                />
                <p className={classes.error}>{error.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.boton}>
          <button type="submit">REALIZAR LA TRANSFERENCIA</button>
        </div>
      </form>
    </div>
  );
};
