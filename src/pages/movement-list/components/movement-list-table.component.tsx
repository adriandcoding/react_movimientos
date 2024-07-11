import { Movements } from "../movement-list.vm";
import React from "react";
import classes from "./movement-list-table.component.module.css";
import { MovementsItemComponent } from "./movement-list-item.component";
// interface
interface Props {
  accountMovements: Movements[];
}

export const MovementsTableComponent: React.FC<Props> = (props) => {
  //destructuring PROPS
  const { accountMovements } = props;
  //render
  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridTable}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>FECHA</span>
          <span className={classes.headerCell}>FECHA VALOR</span>
          <span className={classes.headerCell}>DESCRIPCIÓN</span>
          <span className={classes.headerCell}>IMPORTE</span>
          <span className={classes.headerCell}>SALDO DISPONIBLE</span>
        </div>

        {accountMovements.map((Movements) => (
          <MovementsItemComponent
            key={Movements.accountId}
            movementsItem={Movements}
          />
        ))}
      </div>
    </div>
  );
};
