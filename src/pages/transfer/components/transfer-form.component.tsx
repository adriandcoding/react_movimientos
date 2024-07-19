import { AccountVm, emptyTransfer, TransferVm } from "../transfer.vm";
import React from "react";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
}
export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer } = props;
  const [transfer /*setTransfer*/] = React.useState<TransferVm>(emptyTransfer);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onTransfer(transfer);
  };
  return (
    <div>
      <h2>Transferencias</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Seleccione Cuenta de origen</label>
          <select name="originAccount" required>
            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
          </select>
          <div>
            <label>Cuenta de destino:</label>
            <input
              type="text"
              name="destinationAccount"
              required
              placeholder="IBAN"
            />
          </div>
          <div>
            <label htmlFor="">Beneficiario</label>
            <input type="text" name="beneficiary" required />
          </div>
          <div>
            <label htmlFor="">Importe</label>
            <input type="number" name="amount" required />
          </div>
          <div>
            <label htmlFor="Concepto">Concepto</label>
            <input type="text" name="concept" id="" />
          </div>
          <div>
            <label htmlFor="Observaciones">Observaciones</label>
            <input type="text" name="notes" id="" />
          </div>
          <div>
            <p>
              Para que la transferencia se realice en otra fecha diferente a la
              de hoy, por favor indíquenos la fecha deseada:
            </p>
            <div>
              <label htmlFor="fechaDeTransferencia">Fecha de ejecución</label>
              <input type="date" name="transferDate" id="" />
            </div>
          </div>
        </div>
        <div>
          <p>Escriba una dirección de email para avisar al beneficiario:</p>
          <div>
            <label htmlFor="email">Email del beneficiario</label>
            <input type="email" name="email" id="" required />
          </div>
        </div>

        <button type="submit">REALIZAR LA TRANSFERENCIA</button>
      </form>
    </div>
  );
};
