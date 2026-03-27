import type { TBlogCategory } from "@/api/blog/takeFiveBlogs.api";
import { useAuthStore } from "@/store/auth/auth.store";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { createBlogSchema } from "./components/createBlog.schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BLOG_CATEGORIES } from "../blog-list/blog-list-section/blogList.section";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios.lib";

export interface ICreateBlogParams {
  file: File | null;
  title: string;
  content: string;
  isPublished: boolean;
  authorId: string;
  category: TBlogCategory;
}

export default function CreateBlogPage() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const initialValues: ICreateBlogParams = {
    file: null,
    title: "",
    content: "",
    isPublished: false,
    authorId: user?.id || "",
    category: "NEWS",
  };

  const handleSubmit = async (values: ICreateBlogParams) => {
    try {
      const formData = new FormData();

      if (values.file) {
        formData.append("file", values.file);
      }

      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("isPublished", String(values.isPublished));
      formData.append("authorId", values.authorId);
      formData.append("category", values.category);

      await api.post("/blogs", formData);

      toast.success("Blog created successfully", { position: "bottom-right" });
      navigate("/blog");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create blog");
    }
  };

  useEffect(() => {
    if (!user || user.role.toLowerCase() !== "admin") {
      toast.error("You dont have access to this page");
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <section className="relative min-h-screen min-w-screen px-6 pb-20 pt-30 lg:px-22">
      <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774247340/1854faaa-ed45-4a79-a0a4-42e6d3d70c76_mgqtuk.jpg"
        alt=""
        className="absolute inset-0 z-0 w-full h-full opacity-20"
      />

      <div className="bg-foreground absolute inset-0 opacity-20" />
      <div className="mx-auto relative z-10 flex w-full max-w-4xl flex-col gap-8 ">
        <div className="space-y-2 text-left  items-center justify-center flex flex-col bg-background p-4 rounded-3xl">
          <h1 className="text-[40px] font-bold tracking-tight uppercase text-foreground lg:text-4xl">
            Create <span className="text-primary">Blog</span>
          </h1>
          <p className="text-sm text-muted-foreground lg:text-base">
            Write, upload, and publish your latest blog post.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-xl lg:p-8">
          <Formik
            initialValues={initialValues}
            validationSchema={createBlogSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ isSubmitting, setFieldValue, values, submitForm }) => (
              <Form className="space-y-6">
                <div className="grid gap-6">
                  <div className="space-y-2 text-left">
                    <label
                      htmlFor="title"
                      className="text-sm font-medium text-foreground"
                    >
                      Title
                    </label>
                    <Field
                      as={Input}
                      id="title"
                      name="title"
                      placeholder="Type your blog title..."
                      className="h-11"
                    />
                    <ErrorMessage
                      name="title"
                      component="p"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label
                      htmlFor="category"
                      className="text-sm font-medium text-foreground"
                    >
                      Category
                    </label>

                    <Select
                      value={values.category}
                      onValueChange={(value: TBlogCategory) =>
                        setFieldValue("category", value)
                      }
                    >
                      <SelectTrigger className="h-11 w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Blog Category</SelectLabel>
                          {BLOG_CATEGORIES.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <ErrorMessage
                      name="category"
                      component="p"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label
                      htmlFor="file"
                      className="text-sm font-medium text-foreground"
                    >
                      Thumbnail
                    </label>

                    <Input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="file:bg-secondary hover:file:bg-primary hover:file:text-background file:rounded-3xl file:px-2 flex items-center h-fit"
                      onChange={(e) => {
                        const file = e.currentTarget.files?.[0] || null;
                        setFieldValue("file", file);
                      }}
                    />

                    {values.file && (
                      <p className="text-sm text-muted-foreground">
                        Selected file: {values.file.name}
                      </p>
                    )}

                    <ErrorMessage
                      name="file"
                      component="p"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label
                      htmlFor="content"
                      className="text-sm font-medium text-foreground"
                    >
                      Content
                    </label>
                    <Field
                      as={Textarea}
                      id="content"
                      name="content"
                      placeholder="Write your blog content here..."
                      className="min-h-60 resize-y"
                    />
                    <ErrorMessage
                      name="content"
                      component="p"
                      className="text-sm text-red-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    disabled={isSubmitting}
                    onClick={async () => {
                      await setFieldValue("isPublished", false);
                      submitForm();
                    }}
                    className="w-full sm:w-auto"
                  >
                    Save Draft
                  </Button>

                  <Button
                    type="button"
                    disabled={isSubmitting}
                    onClick={async () => {
                      await setFieldValue("isPublished", true);
                      submitForm();
                    }}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? "Submitting..." : "Publish"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
