import Axios from "axios";
import { AccountApiModel, MovementsApiModel } from "./movements.api-model";

const urlAccountsList = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountsList = (): Promise<AccountApiModel[]> => {
  return Axios.get<AccountApiModel[]>(urlAccountsList).then(
    ({ data }): AccountApiModel[] => data
  );
};

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (
  accountId: AccountApiModel
): Promise<MovementsApiModel[]> =>
  Axios.get<MovementsApiModel[]>(urlMovements, { params: { accountId } }).then(
    ({ data }): MovementsApiModel[] => data
  );
