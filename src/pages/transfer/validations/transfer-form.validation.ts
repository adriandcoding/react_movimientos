import { FormValidation } from "@/common/validations/validation-model";
import { TransferError, TransferVm } from "./../transfer.vm";
import {
  validateNameField,
  validateIBANField,
  validateAmountField,
  validateConceptField,
  validateNotesField,
  validateRealDateField,
  validateEmailField,
  validateAccountIdField,
} from "./transfer-field.validation";
export const validateForm = (
  transfer: TransferVm
): FormValidation<TransferError> => {
  const FieldValidationResult = [
    validateAccountIdField(transfer.accountId),
    validateIBANField(transfer.iban),
    validateNameField(transfer.name),
    validateAmountField(transfer.amount),
    validateConceptField(transfer.concept),
    validateNotesField(transfer.notes),
    validateRealDateField(transfer.realDateTransfer),
    validateEmailField(transfer.email),
  ];
  return {
    succeeded: FieldValidationResult.every(
      (validation): boolean => validation.succeeded
    ),
    errors: {
      accountId: FieldValidationResult[0].message ?? "",
      iban: FieldValidationResult[1].message ?? "",
      name: FieldValidationResult[2].message ?? "",
      amount: FieldValidationResult[3].message ?? "",
      concept: FieldValidationResult[4].message ?? "",
      notes: FieldValidationResult[5].message ?? "",
      dateTransfer: "",
      realDateTransfer: FieldValidationResult[6].message ?? "",
      email: FieldValidationResult[7].message ?? "",
    },
  };
};
