import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { MovementsTableComponent } from "./components";

import { useParams } from "react-router-dom";
import { Movements, emptyMovements } from "./movement-list.vm";
import { getMovements } from "./api";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [accountMovements, setAccountMovements] =
    React.useState<Movements>(emptyMovements);
  React.useEffect(() => {
    if (id) {
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
          <h4>Alias:{id}</h4>
          <h4>{}</h4>
        </div>
        <MovementsTableComponent accountMovements={[]} />
      </div>
    </AppLayout>
  );
};
