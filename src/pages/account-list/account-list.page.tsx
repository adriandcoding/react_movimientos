import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account-list.page.module.css";
import { AccountVm } from "./account-list.vm";
import { AccountListTableComponent } from "./components";

//crear array datos mock
const mockAccountListData: AccountVm[] = [
  {
    id: "1",
    iban: "123456789",
    type: "corriente",
    name: "Cuenta 1",
    balance: 1000,
    lastTransaction: new Date(),
  },
  {
    id: "2",
    iban: "123456789",
    type: "corriente",
    name: "Cuenta 2",
    balance: 2000,
    lastTransaction: new Date(),
  },
];

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] =
    React.useState<AccountVm[]>(mockAccountListData);
  return (
    <AppLayout>
      <div>
        <div className={classes.headerContainer}>
          <h1>Account List</h1>
          <button> CREATE ACCOUNT</button>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
