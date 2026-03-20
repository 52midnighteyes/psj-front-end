import { useNavigate } from "react-router";
import LoginForm from "./components/form";
import { useAuthStore } from "@/store/auth/auth.store";
import { useEffect } from "react";
export default function LoginPage() {
  const session = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session]);

  return (
    <section className="relative flex flex-col bg-primary min-w-screen w-full min-h-screen h-full items-center justify-center p-6">
      <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1773949543/dsc05368-11772514035_vv5cus.jpg"
        className="absolute z-0 inset-0 object-cover object-center w-full h-full"
      />

      <LoginForm />
    </section>
  );
}
