export interface Movements {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: string;
  realTransaction: string;
  accountId: string;
}
export const movementsMocks: Movements[] = [
  {
    id: "1",
    description: "test",
    amount: 1000,
    balance: 1000,
    transaction: "10/01/2021",
    realTransaction: "10/01/2021",
    accountId: "1",
  },
];
