export interface MovementsApiModel {
  id: string;
  transaction: Date;
  realTransaction: Date;
  description: string;
  amount: number;
  balance: number;
  accountId: number;
}
