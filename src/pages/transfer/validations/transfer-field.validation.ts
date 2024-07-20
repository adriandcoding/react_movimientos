import {
  isValidIban,
  isPositiveNumber,
  isDateAfterToday,
  isFieldInformed,
} from "@/common/validations";
import { FieldValidation } from "../transfer.vm";

export const REQUIRED_FIELD_MESSAGE = "Este campo es obligatorio";
export const INVALID_IBAN_MESSAGE = "El IBAN ingresado no es válido";
export const INVALID_AMOUNT_MESSAGE = "La cantidad debe de ser mayor que 0";
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
