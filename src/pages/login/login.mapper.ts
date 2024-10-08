import * as apiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";

export const mapCredentialsFromVmToApi = (
  credentials: viewModel.Credentials
): apiModel.CredentialsApi => ({
  user: credentials.username,
  password: credentials.password,
});
