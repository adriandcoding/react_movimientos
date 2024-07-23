export interface AccountVm {
  id: string;
  iban: string;
  alias: string;
}
export interface TransferVm {
  accountId: string;
  iban: string;
  name: string;
  amount: number;
  concept: string;
  notes: string;
  dateTransfer: string;
  realDateTransfer?: Date;
  email: string;
}
export const emptyTransfer: TransferVm = {
  accountId: "",
  iban: "",
  name: "",
  amount: 0,
  concept: "",
  notes: "",
  dateTransfer: "",
  realDateTransfer: undefined,
  email: "",
};
export interface TransferError {
  accountId: string;
  iban: string;
  name: string;
  amount: string;
  concept: string;
  notes: string;
  dateTransfer: string;
  realDateTransfer?: string;
  email: string;
}
export const emptyTransferError: TransferError = {
  accountId: "",
  iban: "",
  name: "",
  amount: "",
  concept: "",
  notes: "",
  dateTransfer: "",
  realDateTransfer: undefined,
  email: "",
};

export interface FieldValidation {
  succeeded: boolean;
  message?: string;
}
export interface FormValidation {
  succeeded: boolean;
  errors: TransferError;
}
