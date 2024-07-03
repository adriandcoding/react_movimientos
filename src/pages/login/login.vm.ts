export interface Credentials {
  username: string;
  password: string;
}
export const createEmptyCredentials = (): Credentials => ({
  username: "",
  password: "",
});
