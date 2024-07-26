import {
  isValidIban,
  isPositiveNumber,
  isFieldInformed,
  isValueNotNullOrUndefined,
  isValidEmail,
} from "@/common/validations";
import {
  buildValidationFalseResponse,
  buildValidationTrueResponse,
} from "@/common/validations/plain.validation.helper";
import { FieldValidation } from "@/common/validations/validation-model";

import {
  REQUIRED_FIELD_MESSAGE,
  INVALID_IBAN_MESSAGE,
  INVALID_AMOUNT_MESSAGE,
  INVALID_DATE_MESSAGE,
  INVALID_EMAIL_MESSAGE,
} from "@/common/validations/validations.const";

export const validateIBANField = (value: string): FieldValidation => {
  if (!isFieldInformed(value)) {
    return buildValidationFalseResponse(REQUIRED_FIELD_MESSAGE);
  }
  if (!isValidIban(value)) {
    return buildValidationFalseResponse(INVALID_IBAN_MESSAGE);
  }
  return buildValidationTrueResponse();
};

export const validateAccountIdField = (value: string): FieldValidation => {
  if (!isFieldInformed(value)) {
    return buildValidationFalseResponse(REQUIRED_FIELD_MESSAGE);
  }
  return buildValidationTrueResponse();
};
export const validateNameField = (value: string): FieldValidation => {
  if (!isFieldInformed(value)) {
    return buildValidationFalseResponse(REQUIRED_FIELD_MESSAGE);
  }
  return buildValidationTrueResponse();
};
export const validateAmountField = (value: number): FieldValidation => {
  if (!isPositiveNumber(value)) {
    return buildValidationFalseResponse(INVALID_AMOUNT_MESSAGE);
  }
  return buildValidationTrueResponse();
};
export const validateConceptField = (value: string): FieldValidation => {
  if (!isFieldInformed(value)) {
    return buildValidationFalseResponse(REQUIRED_FIELD_MESSAGE);
  }
  return buildValidationTrueResponse();
};
export const validateNotesField = (_: string): FieldValidation =>
  buildValidationTrueResponse();
export const validateRealDateField = (date?: Date): FieldValidation => {
  if (!isValueNotNullOrUndefined(date)) {
    return buildValidationTrueResponse();
  }
  const today = new Date();
  if (date && date.getTime() < today.getTime()) {
    return {
      succeeded: false,
      message: INVALID_DATE_MESSAGE,
    };
  }
  return buildValidationTrueResponse();
};
export const validateEmailField = (value: string): FieldValidation => {
  if (!isFieldInformed(value)) {
    return buildValidationTrueResponse();
  }
  const isValid = isValidEmail(value);
  return {
    succeeded: isValid,
    message: isValid ? "" : INVALID_EMAIL_MESSAGE,
  };
};
