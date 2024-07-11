import axios from "axios";
import { AccountApiModel } from "./account-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountApiModel[]> =>
  axios
    .get<AccountApiModel[]>(url)
    .then((response): AccountApiModel[] => response.data);

export const getIban = async (id: string): Promise<string | undefined> => {
  try {
    const apiUrl = `${import.meta.env.VITE_BASE_API_URL}/account-list`;
    const response = await axios.get(apiUrl);
    const account = response.data.find((account: any) => account.id === id);
    const iban = account.iban;
    return iban;
  } catch (error) {
    console.error("Error al obtener el IBAN:", error);
    return undefined;
  }
};
