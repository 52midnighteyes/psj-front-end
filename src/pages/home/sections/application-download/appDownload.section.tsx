import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function AppDownload() {
  return (
    <section className="relative min-h-80 min-w-screen bg-cover bg-[url('https://res.cloudinary.com/dhjorpzhh/image/upload/v1774186912/93aa0233-3564-4a25-986f-932fd06d0962_jifopv.jpg')]">
      <div className="absolute z-0 items-start inset-0 bg-[url('grad2.png')] opacity-60 bg-cover bg-bottom"></div>

      <div className="relative gap-5 h-full z-10 w-full flex flex-col text-center p-8 lg:p-20 items-center uppercase font-semibold justify-center text-background">
        <div>
          <h1 className="text-[60px]">Persija, in your hands.</h1>
          <p className="text-[24px] font-normal">
            Stay updated with club news, match updates, ticketing information,
            and exclusive offers.
          </p>
        </div>
        <Button
          onClick={() => toast("soon", { position: "top-right" })}
          className="text-[16px] p-8 bg-background text-foreground"
        >
          DOWNLOAD APP! <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
