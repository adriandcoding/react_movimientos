import * as apiModel from "./api/account-list.api-model";
import * as viewModel from "./account-list.vm";

export const mapAccountListFromApiToVm = (
  accountList: apiModel.AccountApiModel[]
): viewModel.AccountVm[] =>
  accountList.map(
    (account): viewModel.AccountVm => ({
      id: account.id,
      iban: account.iban,
      type: account.type,
      name: account.name,
      balance: account.balance.toString(),
      lastTransaction: new Date(account.lastTransaction),
    })
  );
