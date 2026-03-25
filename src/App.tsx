import { Route, Routes } from "react-router";
import Navbar from "./components/navbar.comp";
import HomePage from "./pages/home/home-page";
import LoginPage from "./pages/auth/login/login-page";
import { Footer } from "./components/footer.comp";
import { BlogPage } from "./pages/blog/blog.page";
import { AboutUsPage } from "./pages/about-us/about-us-page";
import { AcademyPage } from "./pages/academy/academy-page";
import { ManagementPage } from "./pages/management/management-page";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/management" element={<ManagementPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
