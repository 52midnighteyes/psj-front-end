import api from "@/lib/axios.lib";

export const logoutApi = async () => {
  const response = await api.post<{ message: string }>("/auth/logout");
  return response.data;
};
