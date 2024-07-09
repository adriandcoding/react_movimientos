// Import statements
import { appRoutes } from "@/core/router";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-item.component.module.css";
import { Link, generatePath, useNavigate } from "react-router-dom";

// Constants
const ACTION_NONE = "";
const ACTION_TRANSFER = "1";
const ACTION_MOVEMENTS = "2";

// Interface
interface Props {
  accountItem: AccountVm;
}

// Component definition
export const AccountListItemComponent: React.FC<Props> = (props) => {
  // Destructuring props
  const { accountItem } = props;

  // Hooks
  const navigate = useNavigate();

  // Render
  return (
    <div className={classes.row}>
      <AccountIban accountItem={accountItem} />
      <AccountType accountItem={accountItem} />
      <AccountBalance accountItem={accountItem} />
      <AccountLastTransaction accountItem={accountItem} />
      <AccountActions accountItem={accountItem} navigate={navigate} />
    </div>
  );
};

// AccountIban component
const AccountIban: React.FC<Props> = (props) => {
  const { accountItem } = props;

  return (
    <span className={`${classes.dataCell} ${classes.bold}`}>
      <Link to={generatePath(appRoutes.movements, { id: accountItem.id })}>
        {accountItem.iban}
      </Link>
    </span>
  );
};

// AccountType component
const AccountType: React.FC<Props> = (props) => {
  const { accountItem } = props;

  return <span className={classes.dataCell}>{accountItem.type}</span>;
};

// AccountBalance component
const AccountBalance: React.FC<Props> = (props) => {
  const { accountItem } = props;

  return (
    <span className={`  ${classes.dataCell} ${classes.align}`}>
      {accountItem.balance}
    </span>
  );
};

// AccountLastTransaction component
const AccountLastTransaction: React.FC<Props> = (props) => {
  const { accountItem } = props;

  return (
    <span className={`  ${classes.dataCell} ${classes.align}`}>
      {accountItem.lastTransaction.toLocaleDateString()}
    </span>
  );
};

// AccountActions component
const AccountActions: React.FC<
  Props & { navigate: ReturnType<typeof useNavigate> }
> = (props) => {
  const { accountItem, navigate } = props;

  const handledSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    switch (e.target.value) {
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

  return (
    <span className={`  ${classes.dataCell} ${classes.selectContainer}`}>
      <select name="" id="" onChange={handledSelectedOptionChange}>
        <option value={ACTION_NONE}>Select</option>
        <option value={ACTION_TRANSFER}>Transfer</option>
        <option value={ACTION_MOVEMENTS}>Movements</option>
      </select>
    </span>
  );
};
