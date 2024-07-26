import Axios from "axios";
import { CredentialsApi } from "./login.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/login`;

export const isValidLogin = async (
  credentials: CredentialsApi
): Promise<boolean> => Axios.post(url, credentials).then(({ data }) => data);
