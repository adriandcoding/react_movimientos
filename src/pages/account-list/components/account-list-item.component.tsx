import { appRoutes } from "@/core/router";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-item.component.module.css";
import { Link, generatePath, useNavigate } from "react-router-dom";
//constants
const ACTION_NONE = "";
const ACTION_TRANSFER = "1";
const ACTION_MOVEMENTS = "2";
//interface
interface Props {
  accountItem: AccountVm;
}
//Componer definition
export const AccountListItemComponent: React.FC<Props> = (props) => {
  //destructuring PROPS
  const { accountItem } = props;
  //useNavigate hook to navigate to other routes
  const navigate = useNavigate();
  //event handler for selected option change
  const handledSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (e.target.value) {
      case ACTION_TRANSFER:
        navigate(generatePath(appRoutes.transfer, { id: accountItem.id }));
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
