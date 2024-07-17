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
