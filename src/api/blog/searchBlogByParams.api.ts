import type { IApiResponse } from "@/interface/responseApi.interface";
import api from "@/lib/axios.lib";
import type { IBlogListData } from "./takeFiveBlogs.api";
type TBlogCategory =
  | "MATCH"
  | "PLAYER"
  | "TRANSFER"
  | "NEWS"
  | "FANS"
  | "HISTORY"
  | "TRAINING"
  | "EVENT"
  | "MERCH";

export interface IGetAllBlogsQuery {
  search?: string;
  category?: TBlogCategory;
  page: number | 1;
  limit: number | 10;
  sortBy: "createdAt" | "title";
  sortOrder: "asc" | "desc";
}

export const searchBlogByParams = async (query: IGetAllBlogsQuery) => {
  try {
    const response = await api.get<IApiResponse<IBlogListData>>(`/api/blog`, {
      params: {
        query,
      },
    });

    return response.data;
  } catch (error) {
    console.error("error while fetching data");
  }
};
