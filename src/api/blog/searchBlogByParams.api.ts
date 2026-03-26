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

export type TSortBy = "createdAt" | "title";
export type TSortOrder = "asc" | "desc";

export interface IGetAllBlogsQuery {
  search?: string;
  category?: TBlogCategory;
  page: number;
  limit: number;
  sortBy: TSortBy;
  sortOrder: TSortOrder;
}

export const searchBlogByParams = async (query: IGetAllBlogsQuery) => {
  try {
    console.log(query);
    const response = await api.get<IApiResponse<IBlogListData>>(`/blogs`, {
      params: query,
    });

    return response.data;
  } catch (error) {
    console.error("error while fetching data");
  }
};
