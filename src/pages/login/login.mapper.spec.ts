import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as viewModel from "./login.vm";
import * as apiModel from "./api/login.api-model";

describe("login.mapper specs", () => {
  it("should return a credential with same properties", () => {
    //arrange
    const credentials: viewModel.Credentials = {
      username: "username",
      password: "password",
    };
    const apiCredentials: apiModel.CredentialsApi = {
      user: "username",
      password: "password",
    };
    //act
    const result = mapCredentialsFromVmToApi(credentials);
    //assert
    expect(result).toEqual(apiCredentials);
  });
});
