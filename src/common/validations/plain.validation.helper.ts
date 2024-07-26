import { FieldValidation } from "./validation-model";
import { REQUIRED_FIELD_MESSAGE } from "./validations.const";

export const buildValidationFalseResponse = (
  message: string
): FieldValidation => ({
  succeeded: false,
  message,
});

export const buildValidationTrueResponse = (): FieldValidation => ({
  succeeded: true,
});
export const buildValidationFieldFalseResponse = () => {
  return buildValidationFalseResponse(REQUIRED_FIELD_MESSAGE);
};
