import * as Yup from "yup";
import type { TBlogCategory } from "@/api/blog/takeFiveBlogs.api";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];

export interface ICreateBlogFormValues {
  file: File | null;
  title: string;
  content: string;
  isPublished: boolean;
  authorId: string;
  category: TBlogCategory;
}

const BLOG_CATEGORIES: TBlogCategory[] = [
  "MATCH",
  "PLAYER",
  "TRANSFER",
  "NEWS",
  "FANS",
  "HISTORY",
  "TRAINING",
  "EVENT",
  "MERCH",
];

export const createBlogSchema = Yup.object().shape({
  file: Yup.mixed<File>()
    .required("Image is required")
    .test({
      name: "fileType",
      message: "Invalid file type. Only JPG, PNG, and WEBP are allowed.",
      test: (file) => {
        if (!(file instanceof File)) return false;
        return ALLOWED_MIME_TYPES.includes(file.type);
      },
    })
    .test({
      name: "fileSize",
      message: "File too big. Max size is 5 MB.",
      test: (file) => {
        if (!(file instanceof File)) return false;
        return file.size <= MAX_FILE_SIZE;
      },
    }),

  title: Yup.string()
    .trim()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters")
    .max(150, "Title must be at most 150 characters"),

  content: Yup.string()
    .trim()
    .required("Content is required")
    .min(20, "Content must be at least 20 characters"),

  isPublished: Yup.boolean().required().default(false),

  category: Yup.mixed<TBlogCategory>()
    .oneOf(BLOG_CATEGORIES, "Invalid category")
    .required("Category is required"),
});
