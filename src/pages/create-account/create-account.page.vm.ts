export interface Account {
  type: string;
  name: string;
}

export interface CreateAccount {
  type: string;
  name: string;
}
export const createEmptyAccount = (): CreateAccount => ({
  type: "",
  name: "",
});

export interface CreateAccountErrors {
  type: string;
  name: string;
}
export const createEmptyAccountErrors = (): CreateAccountErrors => ({
  type: "",
  name: "",
});
