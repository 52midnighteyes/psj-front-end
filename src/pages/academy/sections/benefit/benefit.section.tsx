const featuredPrograms = [
  {
    title: "Clear Curriculum",
    description:
      "A structured program developing technique, tactics, fitness, discipline, and steady progress at every stage.",
  },
  {
    title: "Elite Coaches",
    description:
      "Led by experienced coaches, including former Persija figures and national-level football backgrounds.",
  },
  {
    title: "Pro Pathway",
    description:
      "A clear route connecting academy development with higher competition and professional football opportunities.",
  },
  {
    title: "Strong Character",
    description:
      "Focused on discipline, confidence, resilience, responsibility, and mentality needed for competitive football growth.",
  },
  {
    title: "Match Experience",
    description:
      "Regular competitive matches help players build composure, decision-making, confidence, and real-game understanding.",
  },
  {
    title: "Total Development",
    description:
      "A balanced approach combining technical, physical, mental, and personal growth for long-term player development.",
  },
];

export function BenefitSection() {
  return (
    <section className="relative flex min-h-160 min-w-screen items-center justify-center overflow-hidden bg-background px-6 py-22 lg:min-h-230 lg:px-22">
      <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774247340/1854faaa-ed45-4a79-a0a4-42e6d3d70c76_mgqtuk.jpg"
        alt="Persija Academy background"
        className="absolute inset-0 z-0 h-full w-full rotate-180 object-cover object-bottom opacity-20"
      />

      <div className="relative z-10 flex w-full max-w-7xl flex-col gap-14">
        <div className="flex flex-col mb-10 items-center gap-4 text-center ">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary opacity-80">
            Persija Academy
          </p>
          <h2 className="max-w-4xl text-4xl font-bold uppercase leading-15 text-foreground sm:text-5xl lg:text-6xl">
            Why{" "}
            <span className="border-b-4 border-primary text-primary">
              Persija Academy
            </span>
            ?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">
          {featuredPrograms.map((program) => (
            <div
              key={program.title}
              className="group flex flex-col items-center justify-center gap-4 rounded-2xl bg-primary p-8 text-center text-background shadow-2xl transition duration-300  hover:scale-110 lg:items-start lg:text-left"
            >
              <h3 className="text-2xl font-bold uppercase leading-tight">
                {program.title}
              </h3>
              <p className="text-sm leading-relaxed text-background/85 lg:text-base">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
