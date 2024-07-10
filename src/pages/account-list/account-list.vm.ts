export interface AccountVm {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: string;
  lastTransaction: Date;
}
