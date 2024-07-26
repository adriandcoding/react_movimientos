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

  // Log the individual field validation results
  console.log("Validation result for type:", FieldValidationResult[0]);
  console.log("Validation result for name:", FieldValidationResult[1]);

  const formValidationResult = {
    succeeded: FieldValidationResult.every(
      (validation): boolean => validation.succeeded
    ),
    errors: {
      type: FieldValidationResult[0].message ?? "",
      name: FieldValidationResult[1].message ?? "",
    },
  };

  // Log the final form validation result
  console.log("Form validation result:", formValidationResult);

  return formValidationResult;
};
