import { Route, Routes } from "react-router";
import Navbar from "./components/navbar.comp";
import HomePage from "./pages/home/home-page";
import LoginPage from "./pages/auth/login/login-page";

function App() {
  return (
    <div className="relative">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
