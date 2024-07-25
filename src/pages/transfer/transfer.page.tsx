import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import classes from "./transfer.page.module.css";

export const accountListMock: AccountVm[] = [
  { id: "1", iban: "FR763000101012345678901132", alias: "Test account" },
  { id: "2", iban: "FR763000101012345678901133", alias: "Test account 2" },
  { id: "3", iban: "FR763000101012345678901134", alias: "Test account 3" },
];

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  React.useEffect(() => {
    setAccountList(accountListMock);
  }, []);
  const handleTransfer = (/*transferInfo: TransferVm*/) => {};
  return (
    <AppLayout>
      <div className={classes.headerContainer}>
        <h1 className={classes.titleContainer}>Transferencias Nacionales</h1>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
        />
      </div>
    </AppLayout>
  );
};
