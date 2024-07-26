import Axios from "axios";
import { Account } from "./create-account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = async (account: Account): Promise<Account> => {
  try {
    const { data } = await Axios.post<Account>(url, account);
    return data;
  } catch (error) {
    throw error;
  }
};
