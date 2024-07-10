import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";

export const MovementListPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.headerContainer}>
        <h1>Saldos y últimos Movimientos</h1>
        <div>
          <h3>Saldo disponible</h3>
          <p>1222</p>
        </div>
      </div>
      <div className={classes.caca}>
        <h4>Alias:{}</h4>
        <h4>IBAN:{}</h4>
      </div>
    </AppLayout>
  );
};
