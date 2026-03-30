import { optimizeCloudinaryImage } from "@/lib/cloudinary";

const sponsors = [
  {
    name: "TCT",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248947/tct-11754905039_uxuacz.png",
  },
  {
    name: "HYUNDAI",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248937/htcvn3-hyundai-logo-clipart-png-file1754905018_flnbmd.png",
  },
  {
    name: "SEI INDONESIA",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248936/seindonesia-logo-with-spot-origin-on-white-background1772130814_q1d9lv.png",
  },
  {
    name: "tiketapasaja.com",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248933/ta-1-11754905803_zdlpwp.png",
  },
  {
    name: "bakrie untuk negeri",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248933/logo-bun-hi-res-e1698860039949-11754904800_m4wvq0.png",
  },
  {
    name: "rs premiere bintaro",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248933/rs-bintaro1754906000_scor4b.png",
  },
  {
    name: "pam jaya",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248932/pam-jaya1754909204_krp4s9.png",
  },
  {
    name: "pocari sweat",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248932/logo-ps-background-biru-new-11754905873_unsyls.png",
  },
  {
    name: "loyal.id",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248932/loyalid-new-final-logo-031754905773_auwzys.png",
  },
  {
    name: "jakpro",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248932/logo-jakpro-full-11754905443_cthrt7.png",
  },
  {
    name: "netzme",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248932/logo-netzme-prime-blue1754905748_exkffv.png",
  },
  {
    name: "mrt jakarta",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248931/logo-mrtj-sekunder-21754905642_1_lyu8u8.png",
  },
  {
    name: "le minerale",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248931/logo-le-minerale21741682478_rnkvis.png",
  },
  {
    name: "juaraga",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248930/juaragapdf1754905710_ctlvsv.png",
  },
  {
    name: "anargya aset management",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248930/logo-anargya-png1754905073_l6njqa.png",
  },
  {
    name: "indomie",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248930/indomie-logo-11754909091_jbkcz6.png",
  },
  {
    name: "trans jakarta",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248930/2-logo-transjakarta-1-1-11754905616_ndurrn.png",
  },
  {
    name: "amman",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248929/artboard-11741682571_ulgr0y.png",
  },
  {
    name: "eliteclub epicentrum",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248929/elite-club-epicentrum-wb1754905851_zk93zh.png",
  },
  {
    name: "bank jakarta",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774248928/bank-jakarta1754909188_rr2bsr.png",
  },
];

type SponsorsSectionProps = {
  color: "primary" | "secondary" | "foreground" | "background";
};

export function SponsorsSection({ color }: SponsorsSectionProps) {
  const duplicatedSponsors = [...sponsors, ...sponsors];

  const bgColorClass = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    foreground: "bg-foreground",
    background: "bg-background",
  };

  return (
    <section
      className={`${bgColorClass[color]} select-none min-h-12 overflow-hidden`}
    >
      <ul className="flex min-w-full w-max items-center gap-15 py-6 animate-infinite-scroll">
        {duplicatedSponsors.map((sponsor, index) => (
          <li
            key={`${sponsor.name}-${index}`}
            className="shrink-0 hover:scale-105 transition-transform"
          >
            <img
              src={optimizeCloudinaryImage(sponsor.image, {
                width: 240,
                height: 96,
                crop: "fit",
              })}
              alt={sponsor.name}
              className="h-12 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
