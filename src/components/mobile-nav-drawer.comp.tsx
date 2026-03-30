import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Link } from "react-router";
import { X } from "lucide-react";

interface ILoginButton {
  name: string;
  link: string;
  onClick: (() => void) | null;
}

type MobileNavDrawerProps = {
  isOpen: boolean;
  logoSrc: string;
  links: Array<{ name: string; link: string }>;
  actionButtons: ILoginButton[];
  onOpenChange: (open: boolean) => void;
};

export default function MobileNavDrawer({
  isOpen,
  logoSrc,
  links,
  actionButtons,
  onOpenChange,
}: MobileNavDrawerProps) {
  return (
    <Drawer direction="top" open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <span className="sr-only">Mobile navigation trigger</span>
      </DrawerTrigger>

      <DrawerContent
        className="bg-background px-6 py-0 "
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          const firstLink = document.querySelector(
            "[data-drawer-first-link]",
          ) as HTMLElement | null;
          firstLink?.focus();
        }}
      >
        <DrawerTitle className="sr-only">Navigation menu</DrawerTitle>
        <DrawerDescription className="sr-only">
          Mobile navigation drawer
        </DrawerDescription>

        <div className=" flex items-center justify-between h-20 ">
          <div className="h-14 flex items-center aspect-square">
            <img src={logoSrc} alt="logo persija jakarta" className="object-cover" />
          </div>

          <div className="flex items-center">
            <DrawerClose asChild>
              <button type="button" aria-label="Close navigation menu">
                <X />
              </button>
            </DrawerClose>
          </div>
        </div>

        <div>
          {links.map((a, index) => (
            <div
              key={a.name}
              className="relative overflow-hidden  h-10 items-center flex justify-between w-full font-semibold group px-4"
            >
              <div className="absolute inset-0 -translate-x-full  bg-primary border-primary group-hover:translate-x-0 transition-all duration-300 ease-in-out"></div>

              <div className="z-10 flex justify-between w-full group-hover:text-background transition-all duration-1000 group-hover:duration-100 ease-in-out ">
                <Link
                  className="flex justify-between w-full"
                  to={a.link}
                  data-drawer-first-link={index === 0 ? true : undefined}
                  onClick={() => onOpenChange(false)}
                >
                  {a.name} <span>{`>`}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center h-20 gap-5 ">
          {actionButtons.map((a) => (
            <Button
              asChild
              key={a.name}
              onClick={a.onClick ? () => a.onClick?.() : undefined}
              className="h-10 w-full hover:scale-105"
            >
              <Link to={a.link} onClick={() => onOpenChange(false)}>
                {a.name}
              </Link>
            </Button>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
