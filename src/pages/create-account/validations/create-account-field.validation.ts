import { isFieldInformed } from "@/common/validations";
import {
  buildValidationFieldFalseResponse,
  buildValidationTrueResponse,
} from "@/common/validations/plain.validation.helper";
import { FieldValidation } from "@/common/validations/validation-model";

export const validateAccountIdField = (value: string): FieldValidation => {
  if (!isFieldInformed(value)) {
    return buildValidationFieldFalseResponse();
  }
  return buildValidationTrueResponse();
};
export const validateTypeField = (value: string): FieldValidation => {
  if (!isFieldInformed(value)) {
    return buildValidationFieldFalseResponse();
  }
  return buildValidationTrueResponse();
};
