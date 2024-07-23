import { TransferVm } from "../transfer.vm";
import { validateForm } from "./transfer-form.validation";
import { vi } from "vitest";
import * as transferFieldValidation from "./transfer-field.validation";

describe("transfer-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return false when validateFieldAmount is incorrect", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "AL35202111090000000001234567",
        name: "",
        amount: 10,
        concept: "Transfer",
        notes: "",
        dateTransfer: "",
        realDateTransfer: undefined,
        email: "",
      };
      vi.spyOn(transferFieldValidation, "validateIBANField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        transferFieldValidation,
        "validateAccountIdField"
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: false,
        message: "error",
      });
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        }
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDateField"
      ).mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(transfer);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "error",
        amount: "",
        concept: "",
        notes: "",
        dateTransfer: "",
        realDateTransfer: "",
        email: "",
      });
    });
  });
});
