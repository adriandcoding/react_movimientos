import { Account } from "./api/create-account.api-model";
import { CreateAccount } from "./create-account.page.vm";

export const mapAccountFromApiToVm = (account: Account): CreateAccount => ({
  type: account.type,
  name: account.name,
});
