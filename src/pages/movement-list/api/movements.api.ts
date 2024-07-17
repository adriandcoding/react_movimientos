import Axios from "axios";
import { Movements } from "../movement-list.vm";

const url = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<Movements[]> =>
  Axios.get<Movements[]>(url, { params: { accountId } })
    .then(({ data }) => data)
    .catch((error) => {
      console.error("Error fetching movements:", error);
      throw error;
    });
export const getIban = async (id: string): Promise<string | undefined> => {
  try {
    const apiUrl = `${import.meta.env.VITE_BASE_API_URL}/account-list`;
    const response = await Axios.get(apiUrl);
    const account = response.data.find((account: any) => account.id === id);
    const iban = account.iban;
    return iban;
  } catch (error) {
    console.error("Error al obtener el IBAN:", error);
    return undefined;
  }
};

export const getBalance = async (id: string): Promise<number | undefined> => {
  try {
    const apiUrl = `${import.meta.env.VITE_BASE_API_URL}/account-list`;
    const response = await Axios.get(apiUrl);
    const account = response.data.find((account: any) => account.id === id);
    const balance = account.balance;
    return balance;
  } catch (error) {
    console.error("Error al obtener el balance:", error);
    return undefined;
  }
};
