import * as apiModel from "./api";
import * as viewModel from "./transfer.vm";

export const mapAccountListFromApiToVm = (
  account: apiModel.Account
): viewModel.AccountVm => {
  return {
    id: account.id,
    iban: account.iban,
    alias: account.name,
  };
};

export const mapTransferFromVmToApi = (
  transfer: viewModel.TransferVm
): apiModel.Transfer => {
  return {
    accountId: transfer.accountId,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    concept: transfer.concept,
    notes: transfer.notes,
    dateTransfer: new Date().toDateString(),
    realDateTransfer: transfer.realDateTransfer?.toDateString() ?? "",
  };
};
