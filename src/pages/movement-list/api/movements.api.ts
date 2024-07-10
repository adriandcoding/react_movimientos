import Axios from "axios";
import { MovementsApiModel } from "./movements.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<MovementsApiModel[]> =>
  Axios.get<MovementsApiModel[]>(urlMovements, { params: { accountId } }).then(
    ({ data }): MovementsApiModel[] => data
  );
