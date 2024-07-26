import { appRoutes } from "@/core/router";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-item.component.module.css";
import { Link, generatePath, useNavigate } from "react-router-dom";

const ACTION_NONE = "";
const ACTION_TRANSFER = "1";
const ACTION_MOVEMENTS = "2";

interface Props {
  accountItem: AccountVm;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
  const { accountItem } = props;

  const navigate = useNavigate();

  const handledSelectedOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (event.target.value) {
      case ACTION_TRANSFER:
        navigate(
          generatePath(appRoutes.transferFromAccount, { id: accountItem.id })
        );
        break;
      case ACTION_MOVEMENTS:
        navigate(generatePath(appRoutes.movements, { id: accountItem.id }));
        break;
      default:
        break;
    }
  };

  //render
  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        <Link to={generatePath(appRoutes.movements, { id: accountItem.id })}>
          {accountItem.iban}
        </Link>
      </span>
      <span className={classes.dataCell}>{accountItem.name}</span>

      <span className={`  ${classes.dataCell} ${classes.align}`}>
        {accountItem.balance}
      </span>
      <span className={`  ${classes.dataCell} ${classes.align}`}>
        {accountItem.lastTransaction.toLocaleDateString()}
      </span>

      <span className={`  ${classes.dataCell} ${classes.selectContainer}`}>
        <select name=" " id="" onChange={handledSelectedOptionChange}>
          <option value={ACTION_NONE}>Seleccionar</option>
          <option value={ACTION_TRANSFER}>Transferencias</option>
          <option value={ACTION_MOVEMENTS}>Movimientos</option>
        </select>
      </span>
    </div>
  );
};
