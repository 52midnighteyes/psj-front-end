import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router";
import Navbar from "./components/navbar.comp";
import { Footer } from "./components/footer.comp";

const HomePage = lazy(() => import("./pages/home/home-page"));
const LoginPage = lazy(() => import("./pages/auth/login/login-page"));
const BlogPage = lazy(() =>
  import("./pages/blog/blog.page").then((module) => ({
    default: module.BlogPage,
  })),
);
const AboutUsPage = lazy(() =>
  import("./pages/about-us/about-us-page").then((module) => ({
    default: module.AboutUsPage,
  })),
);
const AcademyPage = lazy(() =>
  import("./pages/academy/academy-page").then((module) => ({
    default: module.AcademyPage,
  })),
);
const ManagementPage = lazy(() =>
  import("./pages/management/management-page").then((module) => ({
    default: module.ManagementPage,
  })),
);
const BlogListPage = lazy(() => import("./pages/blog-list/BlogListPage"));
const CreateBlogPage = lazy(() => import("./pages/create-blog/createBlogPage"));

function RouteFallback() {
  return (
    <section className="flex min-h-[50vh] w-full items-center justify-center bg-secondary px-6 py-16">
      <div className="flex w-full max-w-xs flex-col gap-3">
        <div className="h-3 w-2/3 animate-pulse bg-primary/70" />
        <div className="h-3 w-full animate-pulse bg-primary/60" />
        <div className="h-3 w-5/6 animate-pulse bg-primary/50" />
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] w-full items-center justify-center bg-secondary px-6 py-16">
      <div className="flex max-w-xl flex-col items-center gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          404 Error
        </p>
        <h1 className="text-4xl font-black uppercase text-foreground lg:text-6xl">
          Page Not Found
        </h1>
        <p className="max-w-md text-sm text-muted-foreground lg:text-base">
          Halaman yang kamu cari nggak tersedia atau mungkin URL-nya salah.
        </p>
        <Link
          to="/"
          className="rounded-md bg-primary px-5 py-3 text-sm font-semibold uppercase text-primary-foreground transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/blogs" element={<BlogListPage />} />
            <Route path="/create-blog" element={<CreateBlogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
