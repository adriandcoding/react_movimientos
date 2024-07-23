import {
  isValidIban,
  isPositiveNumber,
  isFieldInformed,
  isValueNotNullOrUndefined,
  isValidEmail,
} from "@/common/validations";
import { FieldValidation } from "../transfer.vm";

export const REQUIRED_FIELD_MESSAGE = "Este campo es obligatorio";
export const INVALID_IBAN_MESSAGE = "El IBAN ingresado no es válido";
export const INVALID_AMOUNT_MESSAGE = "La cantidad debe de ser mayor que 0";
export const INVALID_DATE_MESSAGE =
  "La fecha debe de ser posterior a la actual";
export const INVALID_EMAIL_MESSAGE = "El email ingresado no es válido";

const buildValidationFalseResponse = (message: string): FieldValidation => ({
  succeeded: false,
  message,
});

const buildValidationTrueResponse = (): FieldValidation => ({
  succeeded: true,
});

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
