import Axios from "axios";
import { Movements } from "../movement-list.vm";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<Movements[]> =>
  Axios.get<Movements[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );
