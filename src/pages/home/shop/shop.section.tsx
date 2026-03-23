import { Button } from "@/components/ui/button";

export const products = [
  {
    name: "Home Jersey",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774252951/home-jersey_c4sqep.jpg",
  },
  {
    name: "Special Jersey",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774252951/special-jersey_y5m4cb.jpg",
  },
  {
    name: "Away Jersey",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774252950/away-jersey_koqqul.jpg",
  },
];
export function ShopSection() {
  return (
    <section className="relative min-w-screen p-8 md:px-22 min-h-200 items-center overflow-hidden bg-secondary  flex text-center justify-center ">
      <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774187413/db1084e5-e807-44aa-a085-4d79cec7efda_kdqfg9.jpg"
        className="absolute inset-0 h-full w-full opacity-10 object-cover z-0"
      />
      <div className=" relative z-10 mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-1 overflow-hidden bg-background drop-shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="flex justify-center p-4">
              <Button className="rounded-none px-8">SHOP NOW</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
