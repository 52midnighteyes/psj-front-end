import {
  searchBlogByParams,
  type TSortBy,
  type TSortOrder,
} from "@/api/blog/searchBlogByParams.api";
import {
  type IPaginationMeta,
  type IBlogListItem,
  type TBlogCategory,
} from "@/api/blog/takeFiveBlogs.api";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

export const BLOG_CATEGORIES = [
  { label: "All", value: "-1" },
  { label: "Match", value: "MATCH" },
  { label: "Player", value: "PLAYER" },
  { label: "Transfer", value: "TRANSFER" },
  { label: "News", value: "NEWS" },
  { label: "Fans", value: "FANS" },
  { label: "History", value: "HISTORY" },
  { label: "Training", value: "TRAINING" },
  { label: "Event", value: "EVENT" },
  { label: "Merch", value: "MERCH" },
] as const;

export default function BlogListSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogs, setBlogs] = useState<IBlogListItem[]>([]);
  const [srch, setSrch] = useState<string>("");
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const search = searchParams.get("search") || "";
  const category: TBlogCategory | null =
    (searchParams.get("category") as TBlogCategory) || null;
  const page: number = Number(searchParams.get("page")) || 1;
  const sortBy: TSortBy =
    (searchParams.get("sortBy") as TSortBy) || "createdAt";
  const sortOrder: TSortOrder =
    (searchParams.get("sortOrder") as TSortOrder) || "desc";

  const handleChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    const v = value.trim();
    if (!v || v === "-1") {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    if (key !== "page") newParams.set("page", "1");
    setSearchParams(newParams);
  };

  useEffect(() => {
    const getBlog = async () => {
      const response = await searchBlogByParams({
        ...(search && { search }),
        ...(category && { category }),
        page,
        limit: 12,
        sortBy,
        sortOrder,
      });

      if (!response) {
        return;
      }

      const { data, meta } = response.data;
      console.log(data);
      setBlogs(data);
      setMeta(meta);
      setIsLoaded(true);
    };

    getBlog();
  }, [searchParams]);

  if (!isLoaded || !meta)
    return (
      <section className="relative flex min-h-screen min-w-screen flex-col justify-center overflow-hidden bg-secondary px-8 pb-20 pt-16 text-center lg:px-22">
        loading ...
      </section>
    );

  return (
    <section className="relative flex gap-4 min-h-screen min-w-screen flex-col justify-start overflow-hidden bg-secondary  px-8 pb-20 pt-8 text-center lg:px-22">
      <div className="flex flex-col w-full lg:flex-row-reverse">
        <form
          className="flex relative gap-1 w-full lg:max-w-1/4"
          onSubmit={(a) => {
            a.preventDefault();
            handleChange("search", srch);
          }}
        >
          <Input
            value={search}
            className="bg-background"
            onChange={(a) => {
              setSrch(a.target.value);
            }}
            placeholder="search..."
          />
          <button className="absolute top-1/2 right-3 -translate-y-1/2 hover:text-primary">
            <Search className="h-4 opacity-50" />
          </button>
        </form>

        <div className="flex w-full lg:max-w-3/4">
          <Select
            value={category ? category : "-1"}
            onValueChange={(value) => handleChange("category", value)}
          >
            <SelectTrigger className="bg-background max-w-1/3 w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Category</SelectLabel>
                {BLOG_CATEGORIES.map((a) => (
                  <SelectItem key={a.label} value={a.value}>
                    {a.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={sortBy ? sortBy : "createdAt"}
            onValueChange={(value) => handleChange("sortBy", value)}
          >
            <SelectTrigger className="bg-background max-w-1/3 w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Filter</SelectLabel>
                <SelectItem value="createdAt">Published Date</SelectItem>
                <SelectItem value="title">Title</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            value={sortOrder ? sortOrder : "desc"}
            onValueChange={(value) => handleChange("sortOrder", value)}
          >
            <SelectTrigger className="bg-background max-w-1/3 w-full">
              <SelectValue placeholder="Sort Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Order</SelectLabel>
                <SelectItem value="asc">Asc</SelectItem>
                <SelectItem value="desc">Desc</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col w-full h-full gap-8 pt-8  lg:grid lg:grid-cols-3">
        {blogs.map((a) => (
          <Link
            key={a.title}
            to={`/blog/${a.slug}`}
            className="hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col h-full bg-background overflow-hidden">
              <div className="h-auto overflow-hidden ">
                <img src={a.image} className="object-cover h-full w-full" />
              </div>

              <div className="h-auto flex text-left flex-col  w-full gap-1 p-3">
                <p className="font-semibold text-[18px] uppercase">{a.title}</p>
                <p className="">{a.excerpt}</p>
                <div className="uppercase flex text-[10px] gap-1">
                  <p className="text-primary font-semibold">{a.category}</p>
                  {"-"}
                  <p>{new Date(a.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full flex items-center justify-center ">
        <Pagination className="">
          <PaginationContent>
            {meta.hasPreviousPage ? (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    handleChange("page", String(meta.currentPage - 1))
                  }
                />
              </PaginationItem>
            ) : null}
            {meta.currentPage === 1 ? null : (
              <PaginationItem
                onClick={() =>
                  handleChange("page", String(meta.currentPage - 1))
                }
              >
                <PaginationLink>{meta?.currentPage - 1}</PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink className="font-semibold scale-110">
                {meta?.currentPage}
              </PaginationLink>
            </PaginationItem>

            {meta.totalPages - meta.currentPage < 1 ? null : (
              <PaginationItem
                onClick={() =>
                  handleChange("page", String(meta.currentPage + 1))
                }
              >
                <PaginationLink>{meta?.currentPage + 1}</PaginationLink>
              </PaginationItem>
            )}

            {meta.currentPage + 1 !== meta.totalPages && meta.hasNextPage ? (
              <PaginationItem>...</PaginationItem>
            ) : null}

            {meta.currentPage + 1 !== meta.totalPages && meta.hasNextPage ? (
              <PaginationItem
                onClick={() => handleChange("page", String(meta.totalPages))}
              >
                <PaginationLink>{meta.totalPages}</PaginationLink>
              </PaginationItem>
            ) : null}

            {meta.hasNextPage ? (
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    handleChange("page", String(meta.currentPage + 1))
                  }
                />
              </PaginationItem>
            ) : null}
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}
