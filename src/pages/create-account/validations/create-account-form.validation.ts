import {
  validateAccountIdField,
  validateTypeField,
} from "./create-account-field.validation";
import { FormValidation } from "@/common/validations/validation-model";
import { createAccountErrors, Account } from "../create-account.page.vm";

export const validateForm = (
  account: Account
): FormValidation<createAccountErrors> => {
  const FieldValidationResult = [
    validateAccountIdField(account.type),
    validateTypeField(account.name),
  ];
  return {
    succeeded: FieldValidationResult.every(
      (validation): boolean => validation.succeeded
    ),
    errors: {
      type: FieldValidationResult[0].message ?? "",
      name: FieldValidationResult[1].message ?? "",
    },
  };
};
