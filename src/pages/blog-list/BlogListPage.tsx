import { SponsorsSection } from "../home/sections/sponsors/sponsors.section";
import BlogListSection from "./blog-list-section/blogList.section";
import FeaturedBlogSection from "./featured-blog/featured-blog.section";

export default function BlogListPage() {
  return (
    <>
      <FeaturedBlogSection />
      <SponsorsSection color="secondary" />
      <BlogListSection />
    </>
  );
}
