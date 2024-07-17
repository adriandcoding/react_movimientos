import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { MovementsTableComponent } from "./components";
import { getIban, getBalance, getMovements } from "./api";
import { Movements } from "./movement-list.vm";
import { mapMovementsFromApiToVm } from "./movements.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [movementsList, setMovementsList] = React.useState<Movements[]>([]);
  const [iban, setIban] = React.useState<string>("");
  const [balance, setBalance] = React.useState<number>(0);

  React.useEffect(() => {
    if (id) {
      getMovements(id).then((result) =>
        setMovementsList(mapMovementsFromApiToVm(result))
      );
      getIban(id).then((iban) => setIban(iban ?? ""));
      getBalance(id).then((balance) => setBalance(balance ?? 0));
    }
  }, [id]);
  return (
    <AppLayout>
      <div>
        <div className={classes.headerContainer}>
          <h1>Saldos y últimos Movimientos</h1>
          <div className={classes.saldo}>
            <h3>Saldo disponible</h3>
            <p className={classes.balance}>{balance}€</p>
          </div>
        </div>
        <div className={classes.headerBottom}>
          <h4 className={classes.alias}>Alias: Gastos Mes</h4>
          <h4 className={classes.iban}>IBAN: {iban}</h4>
        </div>
        <MovementsTableComponent accountMovements={movementsList} />
      </div>
    </AppLayout>
  );
};
