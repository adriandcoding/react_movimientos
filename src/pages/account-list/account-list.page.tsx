import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account-list.page.module.css";
import { AccountVm } from "./account-list.vm";
import { AccountListTableComponent } from "./components";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { getAccountList } from "./api";
import { Link } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) => {
      setAccountList(mapAccountListFromApiToVm(result));
    });
  }, []);

  return (
    <AppLayout>
      <div>
        <div className={classes.headerContainer}>
          <h1>Account List</h1>
          <Link to={appRoutes.createAccount}>
            <button> CREATE ACCOUNT</button>
          </Link>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
