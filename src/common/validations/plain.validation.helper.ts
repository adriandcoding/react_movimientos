import { FieldValidation } from "./validation-model";

export const buildValidationFalseResponse = (
  message: string
): FieldValidation => ({
  succeeded: false,
  message,
});

export const buildValidationTrueResponse = (): FieldValidation => ({
  succeeded: true,
});
