import {
  getManagementUsers,
  type IUserCard,
} from "@/api/randomuser/randomuser.api";
import { useEffect, useState } from "react";

export function StaffSection() {
  const [staff, setStaff] = useState<IUserCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await getManagementUsers();
        setStaff(response);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaff();
  }, []);

  return (
    <section className="relative flex min-h-screen min-w-screen items-start justify-center bg-primary px-6 py-20 lg:px-22">
      <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774187413/db1084e5-e807-44aa-a085-4d79cec7efda_kdqfg9.jpg"
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-15"
      />

      <div className="z-10 flex w-full max-w-7xl flex-col gap-10">
        <div className="flex w-full mb-10 flex-col gap-3 items-center text-background">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
            Behind the Scenes
          </p>
          <h2 className="text-4xl font-bold uppercase leading-none text-white lg:text-6xl">
            Staff
          </h2>
          <p className="text-base leading-relaxed text-background/85">
            The people behind the scenes help shape structure, support
            decision-making, and keep the club moving with purpose beyond the
            pitch.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden bg-background shadow-2xl lg:w-[calc((100%-3rem)/3)]"
              >
                <div className="aspect-square w-full animate-pulse bg-zinc-200" />
                <div className="flex flex-col gap-3 p-5">
                  <div className="h-6 w-2/3 animate-pulse bg-zinc-200" />
                  <div className="h-4 w-1/2 animate-pulse bg-zinc-200" />
                  <div className="h-16 w-full animate-pulse bg-zinc-200" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <div className=" bg-background p-6 text-center text-foreground shadow-2xl">
            Failed to load staff data.
          </div>
        ) : (
          <div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
            {staff.map((person, index) => (
              <div
                key={`${person.name}-${index}`}
                className="group overflow-hidden bg-background shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] lg:w-[calc((100%-3rem)/3)]"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-2 p-5 lg:p-6">
                  <h3 className="text-xl font-bold leading-tight text-primary">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
                    {person.role}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
