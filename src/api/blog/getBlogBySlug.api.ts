import type { IApiResponse } from "@/interface/responseApi.interface";
import type { TBlogCategory } from "./takeFiveBlogs.api";
import api from "@/lib/axios.lib";

export interface IBlog {
  author: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: TBlogCategory;
}

export type IGetBlogBySlugResponse = IApiResponse<IBlog>;

export const getBlogBySlug = async (slug: string) => {
  try {
    const response = await api.get<IGetBlogBySlugResponse>(`/blogs/${slug}`);

    return response.data;
  } catch (error) {
    console.log("error fetching blog by slug");
  }
};
