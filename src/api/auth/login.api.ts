import type { IApiResponse } from "@/interface/responseApi.interface";
import api from "@/lib/axios.lib";

export interface ILoginParams {
  email: string;
  password: string;
}

interface ILoginData {
  accessToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}

export const loginApi = async (payload: ILoginParams) => {
  const response = await api.post<IApiResponse<ILoginData>>(
    "/auth/login",
    payload,
  );
  return response.data;
};
