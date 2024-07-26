import { isFieldInformed } from "@/common/validations";
import {
  buildValidationFieldFalseResponse,
  buildValidationTrueResponse,
} from "@/common/validations/plain.validation.helper";
import { FieldValidation } from "@/common/validations/validation-model";

export const validateUserField = (user: string): FieldValidation => {
  if (!isFieldInformed(user)) {
    return buildValidationFieldFalseResponse();
  }
  return buildValidationTrueResponse();
};
export const validatePasswordField = (password: string): FieldValidation => {
  if (!isFieldInformed(password)) {
    return buildValidationFieldFalseResponse();
  }
  return buildValidationTrueResponse();
};
