import {
  validateAccountIdField,
  validateTypeField,
} from "./create-account-field.validation";
import { FormValidation } from "@/common/validations/validation-model";
import { CreateAccountErrors, Account } from "../create-account.page.vm";

export const validateForm = (
  account: Account
): FormValidation<CreateAccountErrors> => {
  const FieldValidationResult = [
    validateAccountIdField(account.type),
    validateTypeField(account.name),
  ];

  const formValidationResult = {
    succeeded: FieldValidationResult.every(
      (validation): boolean => validation.succeeded
    ),
    errors: {
      type: FieldValidationResult[0].message ?? "",
      name: FieldValidationResult[1].message ?? "",
    },
  };

  return formValidationResult;
};
