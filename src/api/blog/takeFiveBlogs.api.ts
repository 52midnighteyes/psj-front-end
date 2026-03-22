import type { IApiResponse } from "@/interface/responseApi.interface";
import api from "@/lib/axios.lib";

export type TBlogCategory =
  | "MATCH"
  | "PLAYER"
  | "TRANSFER"
  | "NEWS"
  | "FANS"
  | "HISTORY"
  | "TRAINING"
  | "EVENT"
  | "MERCH";

export interface IBlogListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: TBlogCategory;
  createdAt: string;
  updatedAt: string;
}

export interface IPaginationMeta {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface IBlogListData {
  data: IBlogListItem[];
  meta: IPaginationMeta;
}

export const takeFiveBlogs = async () => {
  try {
    const response =
      await api.get<IApiResponse<IBlogListData>>("/blogs?limit=5");
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};
