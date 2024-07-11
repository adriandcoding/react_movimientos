import * as apiModel from "./api/movements.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementsFromApiToVm = (
  movements: apiModel.MovementsApiModel[]
): viewModel.Movements[] =>
  movements.map(
    (movement): viewModel.Movements => ({
      id: movement.id.toString(),
      description: movement.description.toString(),
      amount: movement.amount,
      balance: movement.balance,
      transaction: new Date(movement.transaction),
      realTransaction: new Date(movement.realTransaction),
      accountId: movement.accountId,
    })
  );
