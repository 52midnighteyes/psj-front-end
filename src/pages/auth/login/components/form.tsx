import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "./login.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { loginApi, type ILoginParams } from "@/api/auth/login.api";
import { useAuthStore } from "@/store/auth/auth.store";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "sonner";

export default function LoginForm() {
  const [apiError, setApiError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const setSession = useAuthStore((state) => state.setSession);
  const navigate = useNavigate();
  const onSubmit = async (values: ILoginParams) => {
    try {
      setApiError("");

      const response = await loginApi(values);
      console.log(response);
      setSession(response.data.user, response.data.accessToken);
      toast("login successful", {
        position: "top-right",
      });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Login failed. Please try again.";

        setApiError(message);
        toast.error(apiError, { position: "top-right" });
        return;
      }

      setApiError("Something went wrong.");
      toast.error(apiError, { position: "top-right" });
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-80 z-10 h-full w-full max-w-120 min-w-70 rounded-[10px] items-center flex flex-col p-4 drop-shadow-2xl justify-center bg-background">
      <h1 className="font-bold text-2xl">Welcome</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="gap-4 flex flex-col w-full justify-start">
            <div>
              <label htmlFor="email">Email</label>

              <Field
                as={Input}
                ref={inputRef}
                name="email"
                id="email"
                placeholder="example@example.com"
                className="placeholder:opacity-50"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-sm text-red-500"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password">Password</label>

              <div className="relative">
                <Field
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  as={Input}
                  placeholder="type your password"
                  className="pr-10 placeholder:opacity-50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeClosed className="h-4 w-4" />
                  )}
                </button>
              </div>

              <ErrorMessage
                name="password"
                component="p"
                className="text-sm text-red-500"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-4"
            >
              login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
