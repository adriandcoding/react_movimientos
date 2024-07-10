export interface MovementsApiModel {
  id: string;
  transaction: string;
  realTransaction: string;
  description: string;
  amount: number;
  balance: number;
  accountId: number;
}
export interface Account {
  accountId: string;
}
