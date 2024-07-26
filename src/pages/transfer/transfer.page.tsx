import { AppLayout } from "@/layouts";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import classes from "./transfer.page.module.css";
import { createTransfer, getAccountList } from "./api";
import {
  mapAccountListFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mapper";

export const TransferPage: React.FC = () => {
  const navigate = useNavigate();
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getAccountList().then((accountsListApi) => {
      setAccountList(accountsListApi.map(mapAccountListFromApiToVm));
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    const transfer = mapTransferFromVmToApi(transferInfo);
    createTransfer(transfer).then((result) => {
      if (result) {
        alert("Transferencia realizada con éxito");
        navigate("/account-list");
      } else {
        alert("Error al realizar la transferencia");
      }
    });
  };
  return (
    <AppLayout>
      <div className={classes.headerContainer}>
        <h1 className={classes.titleContainer}>Transferencias Nacionales</h1>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defaultAccountId={id}
        />
      </div>
    </AppLayout>
  );
};
