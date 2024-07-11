import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { MovementsTableComponent } from "./components";
import { getIban } from "../account-list/api";
import { Movements } from "./movement-list.vm";
import { getMovements } from "./api";
import { mapMovementsFromApiToVm } from "./movements.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [movementsList, setMovementsList] = React.useState<Movements[]>([]);
  const [iban, setIban] = React.useState<string>("");

  React.useEffect(() => {
    if (id) {
      getMovements(id).then((result) =>
        setMovementsList(mapMovementsFromApiToVm(result))
      );
      getIban(id).then((iban) => setIban(iban ?? ""));
    }
  }, [id]);
  return (
    <AppLayout>
      <div>
        <div className={classes.headerContainer}>
          <h1>Saldos y últimos Movimientos</h1>
          <div className={classes.saldo}>
            <h3>Saldo disponible</h3>
            <p className={classes.balance}>1222</p>
          </div>
        </div>
        <div className={classes.headerBottom}>
          <h4>Alias: Gastos Mes</h4>
          <h4>IBAN: {iban}</h4>
        </div>
        <MovementsTableComponent accountMovements={movementsList} />
      </div>
    </AppLayout>
  );
};
