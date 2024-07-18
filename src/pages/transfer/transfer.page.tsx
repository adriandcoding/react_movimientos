import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm } from "./transfer.vm";

export const accountListMock: AccountVm[] = [
  { id: "123", iban: "FR763000101012345678901132", alias: "Test account" },
  { id: "456", iban: "FR763000101012345678901133", alias: "Test account 2" },
  { id: "789", iban: "FR763000101012345678901134", alias: "Test account 3" },
];

export const TransferPage: React.FC = () => {
  // Mock data
  const [, /*accountList*/ setAccountList] = React.useState<AccountVm[]>([]);
  React.useEffect(() => {
    setAccountList(accountListMock);
  }, []);

  return (
    <AppLayout>
      <h1>Transfer</h1>
    </AppLayout>
  );
};
