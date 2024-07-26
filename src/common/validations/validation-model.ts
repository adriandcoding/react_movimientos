export interface FieldValidation {
  succeeded: boolean;
  message?: string;
}
export interface FormValidation<T> {
  succeeded: boolean;
  errors: T;
}
