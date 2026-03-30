import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { optimizeCloudinaryImage } from "@/lib/cloudinary";

export function AppDownload() {
  return (
    <section className="relative overflow-hidden min-h-80 min-w-screen bg-cover bg-primary">
      <div className="absolute inset-0 z-0 bg-black/25" />{" "}
      <img
        src={optimizeCloudinaryImage(
          "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774186912/93aa0233-3564-4a25-986f-932fd06d0962_jifopv.jpg",
          { width: 1600, height: 800, gravity: "auto" },
        )}
        className="absolute inset-0 opacity-20 object-bottom z-0"
      />
      <div className="relative gap-5 h-full z-10 w-full flex flex-col text-center p-8 lg:p-20 items-center uppercase font-bold justify-center text-background">
        <div className="mb-4">
          <h1 className="text-[60px]">Persija, in your hands.</h1>
          <p className="text-[24px] font-medium">
            Stay updated with club news, match updates, ticketing information,
            and exclusive offers.
          </p>
        </div>
        <Button
          onClick={() => toast("soon", { position: "top-right" })}
          className="text-[16px] font-semibold hover:font-bold p-8 bg-background text-foreground transition-all duration-300 hover:scale-105"
        >
          DOWNLOAD APP! <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
