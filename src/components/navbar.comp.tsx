import { Menu, X } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { useState } from "react";
import { useAuthStore } from "@/store/auth/auth.store";
import { logoutApi } from "@/api/auth/logout.api";
import { toast } from "sonner";
import axios from "axios";
/* 
kita mau apa di navbar?
mobile first!

1. logo persija di kiri
2. icon search dan hamburger di kanan
3. icon hamburger bakal open sidebar
4. di sidebar ada login dan register
5. ada menu yg route ke home, about us, services , teams, blog list and create blog.
6. kalo state udah login, jadi logout dan dashboard



logic belakangan...
*/

interface ILoginButton {
  name: string;
  link: string;
  onClick: (() => void) | null;
}

export default function Navbar() {
  const clearSession = useAuthStore((state) => state.clearSession);

  const onLogOut = async () => {
    try {
      console.log("berhasil manggil fungsi onlogout");
      const response = await logoutApi();
      clearSession();
      toast.success(response.message, { position: "top-right" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Logout failed. Please try again.";
        setApiError(message);
        toast.error(apiError, { position: "top-right" });
      }

      setApiError("Something went wrong.");
      toast.error(apiError, { position: "top-right" });
    }
  };

  const links = [
    { name: "About Us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "Teams", link: "/teams" },
    { name: "Blog List", link: "/blogs" },
  ];

  const isLogOutButton: ILoginButton[] = [
    { name: "Login", link: "/auth/Login", onClick: null },
    { name: "Register", link: "/Register", onClick: null },
  ];

  const isLoginButton: ILoginButton[] = [
    { name: "Logout", link: "/", onClick: onLogOut },
    { name: "Create Blog", link: "/auth/register", onClick: null },
  ];

  const [isOpen, setOpen] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");

  const user = useAuthStore((state) => state.user);
  const isLogin = !!user;

  return (
    <div className="absolute overflow-hidden top-0 left-0 z-50 flex items-center justify-between h-20 lg:h-24 w-full px-5 bg-transparent text-background group hover:text-foreground transition-all duration-1200 ease-in-out ">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 -z-10">
        <div className="absolute bg-white inset-0 translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 "></div>
      </div>
      <div className="h-16 flex items-center gap-2 lg:h-18 aspect-square text-black">
        <img
          src="/persija-dummy.png"
          alt="logo persija jakarta"
          className="object-cover aspect-square h-14 lg:h-18"
        />
      </div>
      {/* ini navbar di desktop mode */}
      <div className="lg:flex hidden lg:gap-5 font-semibold w-full  justify-center ">
        {links.map((a) => (
          <div
            key={a.name}
            className="hover:text-primary hover:duration-150 drop-shadow-[0_0_1px_rgba(0,0,0,1)] group-hover:drop-shadow-none transition-all duration-890 ease-in-out  "
          >
            <Link to={a.link}>{a.name}</Link>
          </div>
        ))}
      </div>
      {/* hamburger yang bakal hidden kalo lg */}
      <div className="block lg:hidden ">
        <Drawer direction="top">
          <DrawerTrigger onClick={() => setOpen(!isOpen)} asChild>
            <button>
              <Menu />
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-background px-6 py-0 ">
            <div className="  flex items-center justify-between h-20 ">
              <div className="h-14 flex items-center aspect-square">
                <img
                  src="persija-dummy.png"
                  alt="logo persija jakarta"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center">
                <DrawerClose>
                  <X />
                </DrawerClose>
              </div>
            </div>

            <div>
              {links.map((a) => (
                <div
                  key={a.name}
                  className="relative overflow-hidden  h-10 items-center flex justify-between w-full font-semibold group px-4"
                >
                  <div className="absolute inset-0 -translate-x-full  bg-primary border-primary group-hover:translate-x-0 transition-all duration-300 ease-in-out"></div>
                  <div className="z-10 flex justify-between w-full group-hover:text-background transition-all duration-1000 group-hover:duration-100 ease-in-out ">
                    <Link to={a.link}>{a.name}</Link> <span>{`>`}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex items-center justify-center h-20 gap-5 ">
              {(isLogin ? isLoginButton : isLogOutButton).map((a) => (
                <Button
                  onClick={a.onClick ? () => a.onClick?.() : undefined}
                  className="h-10 w-32 hover:bg-background hover:border-primary border-2 hover:text-primary hover:font-bold"
                >
                  <Link to={a.link}>{a.name}</Link>
                </Button>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className=" hidden lg:flex items-center justify-center h-20">
        {(isLogin ? isLoginButton : isLogOutButton).map((a) => (
          <Button
            key={a.name}
            onClick={a.onClick ? () => a.onClick?.() : undefined}
            className="overflow-hidden relative h-9 w-auto bg-transparent group/btn rounded-none "
          >
            <div className="absolute inset-0 bg-primary -z-10 translate-y-full group-hover/btn:translate-y-0  duration-300 ease-in-out transition-all"></div>
            <div className=" drop-shadow-[0_0_1px_rgba(0,0,0,1)] group-hover:drop-shadow-none transition-all group-hover/btn:text-background group-hover/btn:duration-400 group-hover:text-foreground duration-1200 ease-in-out">
              <Link to={a.link}>{a.name}</Link>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
