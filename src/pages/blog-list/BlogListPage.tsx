import { SponsorsSection } from "../home/sections/sponsors/sponsors.section";
import BlogListSection from "./blog-list-section/blogList.section";
import FeaturedBlogSection from "./featured-blog/featured-blog.section";
import { Seo } from "@/components/seo.comp";

export default function BlogListPage() {
  return (
    <>
      <Seo
        title="Blog"
        description="Read the latest Persija Jakarta news, stories, club updates, and featured blog posts from across the team."
        path="/blogs"
        keywords={[
          "Persija blog",
          "Persija news",
          "Persija articles",
          "Jakarta football updates",
        ]}
      />
      <FeaturedBlogSection />
      <SponsorsSection color="secondary" />
      <BlogListSection />
    </>
  );
}
