import { REQUIRED_FIELD_MESSAGE } from "@/common/validations/validations.const";
import { Account } from "../create-account.page.vm";
import { validateForm } from "./create-account-form.validation";

describe("create account validation", () => {
  it("should return validation succeeded when both field are informed", () => {
    // Arrange
    const account: Account = {
      type: "savings",
      name: "John Doe",
    };

    // Act
    const result = validateForm(account);

    // Assert
    expect(result.succeeded).toBeTruthy();
  });

  it("should return validation failed when accountId is empty", () => {
    // Arrange
    const account: Account = {
      type: "",
      name: "John Doe",
    };

    // Act
    const result = validateForm(account);

    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.type).toBe(REQUIRED_FIELD_MESSAGE);
  });
  it("should return validation failed when name is empty", () => {
    // Arrange
    const account: Account = {
      type: "savings",
      name: "",
    };

    // Act
    const result = validateForm(account);

    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.name).toBe(REQUIRED_FIELD_MESSAGE);
  });
});
