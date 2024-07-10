import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-table.component.module.css";
import { AccountListItemComponent } from "./account-list-item.component";

interface Props {
  accountList: AccountVm[];
}

export const AccountListTableComponent: React.FC<Props> = (props) => {
  const { accountList } = props;
  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridTable}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>IBAN</span>
          <span className={classes.headerCell}>NAME</span>
          <span className={classes.headerCell}>BALANCE</span>
          <span className={classes.headerCell}>LAST TRANSACTION</span>
          <span className={classes.headerCell}>OPERATION</span>
        </div>
        {accountList.map((account) => (
          <AccountListItemComponent key={account.id} accountItem={account} />
        ))}
      </div>
    </div>
  );
};
