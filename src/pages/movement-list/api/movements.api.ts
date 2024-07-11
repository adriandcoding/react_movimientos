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
