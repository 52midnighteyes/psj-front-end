const academyGraduates = [
  {
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774412634/muhammad_ferrari_timnas_oedfwr.webp",
    name: "Muhammad Ferarri",
    achievement: "Persija Senior Team, Indonesia Senior National Team",
  },
  {
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370071/DONY_TRI_PAMUNGKAS_DF_77_vullmm.webp",
    name: "Dony Tri Pamungkas",
    achievement: "Persija Senior Team, Indonesia National Team",
  },
  {
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774412633/RAYHAN_HANNAN_TIMNAS_mjjyuj.webp",
    name: "Rayhan Hannan",
    achievement: "Persija Senior Team, Indonesia U-23 National Team",
  },
  {
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774412566/ILHAM_RIO_FAHMI_gvmfak.webp",
    name: "Ilham Rio Fahmi",
    achievement: "Persija Senior Team, Indonesia Senior National Team",
  },
  {
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774412690/CAHYA_SUPRIADI_TIMNAS_gniuc1.webp",
    name: "Cahya Supriadi",
    achievement: "Persija Senior Team, Indonesia National Team",
  },
  {
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370068/ARLYANSAH_ABDULMANAN_ST_11_j2uzk0.webp",
    name: "Arlyansyah Abdulmanan",
    achievement: "Persija Senior Team, Indonesia U-20 National Team",
  },
];

export function AlumniSection() {
  return (
    <section className="relative flex min-h-160 min-w-screen items-center justify-center overflow-hidden bg-primary px-6 py-25 lg:min-h-230 lg:px-22">
      <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774187413/db1084e5-e807-44aa-a085-4d79cec7efda_kdqfg9.jpg"
        className="absolute inset-0 h-full w-full opacity-15 object-cover z-0"
      />

      <div className="z-10 flex w-full max-w-7xl flex-col gap-12">
        <div className="flex max-w-2xl flex-col gap-4 text-background">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] opacity-70">
            Persija Academy
          </p>
          <h2 className="text-4xl font-bold uppercase leading-none lg:text-6xl">
            Academy Alumni
          </h2>
          <p className="max-w-xl text-sm leading-relaxed opacity-80 lg:text-base">
            A number of Persija Academy graduates have progressed to the senior
            level and gone on to represent Indonesia on bigger stages.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {academyGraduates.map((graduate, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-background text-foreground shadow-2xl transition duration-500 hover:scale-105"
            >
              <div className="aspect-4/5 w-full overflow-hidden">
                <img
                  src={graduate.avatar}
                  alt={graduate.name}
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition duration-500 "
                />
              </div>

              <div className="flex flex-col gap-3 p-5 lg:p-6">
                <h3 className="text-xl font-semibold uppercase leading-tight text-primary">
                  {graduate.name}
                </h3>
                <p className="text-sm leading-relaxed opacity-75">
                  {graduate.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
