import { FormValidation } from "@/common/validations/validation-model";
import { CredentialsFormErrors } from "./login.vm";
import {
  validateUserField,
  validatePasswordField,
} from "./login-field.validation";

export const validateForm = (
  credentials: CredentialsFormErrors
): FormValidation<CredentialsFormErrors> => {
  const FieldValidationResult = [
    validateUserField(credentials.username),
    validatePasswordField(credentials.password),
  ];
  return {
    succeeded: FieldValidationResult.every(
      (validation): boolean => validation.succeeded
    ),
    errors: {
      username: FieldValidationResult[0].message ?? "",
      password: FieldValidationResult[1].message ?? "",
    },
  };
};
