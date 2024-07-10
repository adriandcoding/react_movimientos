import { Movements } from "../movement-list.vm";

import classes from "./movement-list-item.component.module.css";

//interface
interface Props {
  movementsItem: Movements;
}

export const MovementsItemComponent: React.FC<Props> = (props) => {
  //destructuring PROPS
  const { movementsItem } = props;

  //render
  return (
    <div className={classes.row}>
      <span className={classes.dataCell}> {movementsItem.transaction}</span>
      <span className={classes.dataCell}> {movementsItem.realTransaction}</span>
      <span className={classes.dataCell}> {movementsItem.description}</span>
      <span className={`  ${classes.dataCell} ${classes.align}`}>
        {movementsItem.amount}
      </span>
      <span className={`  ${classes.dataCell} ${classes.align}`}>
        {movementsItem.balance}
      </span>
    </div>
  );
};
