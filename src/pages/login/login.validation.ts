import {
  CredentialsFormErrors,
  createEmptyCredentialsFormErrors,
} from "./login.vm";

interface ValidationResult {
  succeeded: boolean;
  errors: CredentialsFormErrors;
}
export const validateForm = (
  credentials: CredentialsFormErrors
): ValidationResult => {
  let validationResult: ValidationResult = {
    succeeded: true,
    errors: createEmptyCredentialsFormErrors(),
  };
  if (!credentials.username.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      username: "Username is required",
    };
    validationResult.succeeded = false;
  }
  if (!credentials.password.trim()) {
    validationResult.errors = {
      ...validationResult.errors,
      password: "Password is required",
    };
    validationResult.succeeded = false;
  }

  return validationResult;
};
