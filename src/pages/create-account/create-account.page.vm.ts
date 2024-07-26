export interface Account {
  type: string;
  name: string;
}
export const createEmptyAccount = (): Account => ({
  type: "",
  name: "",
});

export interface createAccountErrors {
  type: string;
  name: string;
}
