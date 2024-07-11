import { Movements } from "../movement-list.vm";

import classes from "./movement-list-item.component.module.css";

//interface
interface Props {
  movementsItem: Movements;
}

export const MovementsItemComponent: React.FC<Props> = (props) => {
  //destructuring PROPS
  const { movementsItem } = props;
  // Determinar si el gasto es negativo
  const isExpense = movementsItem.amount < 0;

  // Aplicar clases condicionales
  const amountClasses = `${classes.dataCell} ${classes.align} ${
    isExpense ? classes.expense : ""
  }`;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>
        {movementsItem.transaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        {movementsItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>{movementsItem.description}</span>
      <span className={amountClasses}>{movementsItem.amount}</span>
      <span className={`  ${classes.dataCell} ${classes.align}`}>
        {movementsItem.balance}
      </span>
    </div>
  );
};
