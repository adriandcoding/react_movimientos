import { AccountVm, emptyTransfer, TransferVm } from "../transfer.vm";
import React from "react";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
}
export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(emptyTransfer);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onTransfer(transfer);
  };
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
      <h2>Transferencias</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="originAccount">Seleccione Cuenta de origen</label>
          <select name="accountId" required onChange={handleFieldChange}>
            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
            <option value="">Seleccione una cuenta</option>
          </select>

          <div>
            <label htmlFor="destinationAccount">Cuenta de destino:</label>
            <input
              type="text"
              name="iban"
              required
              placeholder="IBAN"
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label htmlFor="Beneficiario">Beneficiario</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label htmlFor="importe">Importe</label>
            <input
              type="number"
              name="amount"
              required
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label htmlFor="Concepto">Concepto</label>
            <input
              type="text"
              name="concept"
              id=""
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <label htmlFor="Observaciones">Observaciones</label>
            <input
              type="text"
              name="notes"
              id=""
              onChange={handleFieldChange}
            />
          </div>
          <div>
            <p>
              Para que la transferencia se realice en otra fecha diferente a la
              de hoy, por favor indíquenos la fecha deseada:
            </p>
            <div>
              <label htmlFor="fechaDeTransferencia">Fecha de ejecución</label>
              <input
                type="date"
                name="realDateTransfer"
                id=""
                onChange={handleFieldChange}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Escriba una dirección de email para avisar al beneficiario:</p>
          <div>
            <label htmlFor="email">Email del beneficiario</label>
            <input
              type="email"
              name="email"
              id=""
              required
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <button type="submit">REALIZAR LA TRANSFERENCIA</button>
      </form>
    </div>
  );
};
