export interface Credentials {
  username: string;
  password: string;
}
export const createEmptyCredentials = (): Credentials => ({
  username: "",
  password: "",
});
export interface CredentialsFormErrors {
  username: string;
  password: string;
}
export const createEmptyCredentialsFormErrors = (): CredentialsFormErrors => ({
  username: "",
  password: "",
});
