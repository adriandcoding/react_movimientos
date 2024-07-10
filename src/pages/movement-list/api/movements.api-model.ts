export interface MovementsApiModel {
  id: string;
  transaction: Date;
  realTransaction: Date;
  description: string;
  amount: number;
  balance: number;
  accountId: number;
}
export interface AccountApiModel {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: string;
}
