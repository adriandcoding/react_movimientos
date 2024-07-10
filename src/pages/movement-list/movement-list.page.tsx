import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { MovementsTableComponent } from "./components";

import { Movements } from "./movement-list.vm";
import { getMovements } from "./api";
import { mapMovementsFromApiToVm } from "./movements.mapper";
import { generatePath } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const [accountMovements, setAccountMovements] = React.useState<Movements[]>(
    []
  );

  React.useEffect(() => {
    getMovements("1").then((result) => {
      setAccountMovements(mapMovementsFromApiToVm(result));
    });
  }, []);

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
          <h4>Alias:{}</h4>
          <h4>{}</h4>
        </div>
        <MovementsTableComponent accountMovements={accountMovements} />
      </div>
    </AppLayout>
  );
};
