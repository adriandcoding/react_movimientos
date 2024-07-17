import axios from "axios";
import { AccountApiModel } from "./account-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountApiModel[]> =>
  axios
    .get<AccountApiModel[]>(url)
    .then((response): AccountApiModel[] => response.data);
