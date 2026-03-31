import { useNavigate } from "react-router";
import LoginForm from "./components/form";
import { useAuthStore } from "@/store/auth/auth.store";
import { useEffect, useState } from "react";
import { optimizeCloudinaryImage } from "@/lib/cloudinary";
import { Seo } from "@/components/seo.comp";
export default function LoginPage() {
  const session = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (session) {
      navigate("/");
    }

    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex flex-col bg-primary min-w-screen w-full min-h-screen h-full items-center justify-center p-6">
      <Seo
        title="Login"
        description="Sign in to manage Persija Jakarta content and access authorized features."
        path="/auth/login"
        robots="noindex, nofollow"
      />
      <img
        src={optimizeCloudinaryImage(
          "https://res.cloudinary.com/dhjorpzhh/image/upload/v1773949543/dsc05368-11772514035_vv5cus.jpg",
          { width: 1920, height: 1080, gravity: "auto" },
        )}
        className={
          !isLoaded
            ? "absolute z-0 inset-0 object-cover object-center w-full h-full transition-all scale-105 duration-5000"
            : "absolute z-0 inset-0 object-cover object-center w-full h-full transition-all scale-150 duration-5000"
        }
      />

      <LoginForm />
    </section>
  );
}
