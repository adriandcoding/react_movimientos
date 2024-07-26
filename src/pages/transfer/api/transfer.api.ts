import { Transfer, Account } from "./transfer.api-model";
import axios from "axios";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<Account[]> => {
  return axios.get<Account[]>(urlAccount).then(({ data }): Account[] => data);
};

const urlTransfer = `${import.meta.env.VITE_BASE_API_URL}/transfer`;

export const createTransfer = (transfer: Transfer): Promise<Transfer> => {
  return axios
    .post<Transfer>(urlTransfer, transfer)
    .then(({ data }): Transfer => data);
};
