export interface Movements {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realTransaction: Date;
  accountId: number;
}
export const emptyMovements: Movements = {
  id: "",
  description: "",
  amount: 0,
  balance: 0,
  transaction: new Date(),
  realTransaction: new Date(),
  accountId: 0,
};
