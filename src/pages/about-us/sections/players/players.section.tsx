import { optimizeCloudinaryImage } from "@/lib/cloudinary";

export interface IPlayer {
  fullName: string;
  jerseyNumber: number;
  nationality: string;
  position: "GOALKEEPER" | "DEFENDER" | "MIDFIELDER" | "STRIKER";
  avatar: string;
}

const players: IPlayer[] = [
  {
    fullName: "Carlos Eduardo",
    jerseyNumber: 1,
    nationality: "Brazil",
    position: "GOALKEEPER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370070/CARLOS_EDUARDO_GK_1_ykb6xy.webp",
  },
  {
    fullName: "Hafiz Rizkianur",
    jerseyNumber: 22,
    nationality: "Indonesia",
    position: "GOALKEEPER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370072/HAFIZ_RIZKIANUR_GK_22_lw33ds.webp",
  },
  {
    fullName: "Andritany Ardhiyasa",
    jerseyNumber: 26,
    nationality: "Indonesia",
    position: "GOALKEEPER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370069/ANDRITANY_ARDHIYASA_GK_26_c11zln.webp",
  },
  {
    fullName: "Cyrus Margono",
    jerseyNumber: 93,
    nationality: "Indonesia",
    position: "GOALKEEPER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370071/CYRUS_MARGONO_GK_93_gnuq7k.webp",
  },
  {
    fullName: "Paulo Ricardo",
    jerseyNumber: 3,
    nationality: "Brazil",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370070/PAULO_RICARDO_DF_3_xztong.webp",
  },
  {
    fullName: "Fajar Fathurrahman",
    jerseyNumber: 4,
    nationality: "Indonesia",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370071/FAJAR_FATHURRAHMAN_DF_4_fnvpfj.webp",
  },
  {
    fullName: "Rizky Ridho Ramadhani",
    jerseyNumber: 5,
    nationality: "Indonesia",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370070/RIZKY_RIDHO_RAMADHANI_DF_5_kwdnyw.webp",
  },
  {
    fullName: "Thales Lira",
    jerseyNumber: 6,
    nationality: "Brazil",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370663/THALES_LIRA_DF_6_fk31xp.webp",
  },
  {
    fullName: "Jordi Amat",
    jerseyNumber: 21,
    nationality: "Indonesia",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370069/JORDI_AMAT_DF_21_prmf1x.webp",
  },
  {
    fullName: "Shayne Pattynama",
    jerseyNumber: 25,
    nationality: "Indonesia",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370071/SHAYNE_PATTYNAMA_DF_25_v6jhhy.webp",
  },
  {
    fullName: "Muhammad Baihaqi Rifai",
    jerseyNumber: 29,
    nationality: "Indonesia",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370069/MUHAMMAD_BAIHAQI_RIFAI_DF_29_uszmnt.webp",
  },
  {
    fullName: "Dia Syayid Alhawari",
    jerseyNumber: 32,
    nationality: "Indonesia",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370070/DIA_SYAYID_ALHAWARI_DF_32_kk6yvl.webp",
  },
  {
    fullName: "Dony Tri Pamungkas",
    jerseyNumber: 77,
    nationality: "Indonesia",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370071/DONY_TRI_PAMUNGKAS_DF_77_vullmm.webp",
  },
  {
    fullName: "Bruno Tubarao",
    jerseyNumber: 88,
    nationality: "Brazil",
    position: "DEFENDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370068/BRUNO_TUBARAO_DF_88_ujsfzl.webp",
  },
  {
    fullName: "Jean Mota",
    jerseyNumber: 10,
    nationality: "Brazil",
    position: "MIDFIELDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370068/JEAN_MOTA_MF_10_jig8rl.webp",
  },
  {
    fullName: "Van Basty Sousa",
    jerseyNumber: 15,
    nationality: "Brazil",
    position: "MIDFIELDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370071/VAN_BASTY_SOUSA_MF_15_m1xydy.webp",
  },
  {
    fullName: "Hanif Sjahbandi",
    jerseyNumber: 19,
    nationality: "Indonesia",
    position: "MIDFIELDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370068/HANIF_SJAHBANDI_MF_19_s5u0qp.webp",
  },
  {
    fullName: "Aditya Warman",
    jerseyNumber: 36,
    nationality: "Indonesia",
    position: "MIDFIELDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370068/ADITYA_WARMAN_MF_36_dleu9p.webp",
  },
  {
    fullName: "Rayhan Hannan",
    jerseyNumber: 58,
    nationality: "Indonesia",
    position: "MIDFIELDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370070/RAYHAN_HANNAN_MF_58_nyva6v.webp",
  },
  {
    fullName: "Fabio Calonego",
    jerseyNumber: 97,
    nationality: "Brazil",
    position: "MIDFIELDER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370071/FABIO_CALONEGO_MF_97_sqxfzm.webp",
  },
  {
    fullName: "Witan Sulaeman",
    jerseyNumber: 8,
    nationality: "Indonesia",
    position: "STRIKER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370071/WITAN_SULAEMAN_ST_8_rhowgv.webp",
  },
  {
    fullName: "Mauro Zijlstra",
    jerseyNumber: 9,
    nationality: "Indonesia",
    position: "STRIKER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370069/MAURO_ZIJLSTRA_ST_9_c6vmhq.webp",
  },
  {
    fullName: "Arlyansah Abdulmanan",
    jerseyNumber: 11,
    nationality: "Indonesia",
    position: "STRIKER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370068/ARLYANSAH_ABDULMANAN_ST_11_j2uzk0.webp",
  },
  {
    fullName: "Allano Brendon de Souza",
    jerseyNumber: 17,
    nationality: "Brazil",
    position: "STRIKER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370069/ALLANO_BRENDON_DE_SOUZA_ST_17_zslyxo.webp",
  },
  {
    fullName: "Alaeddine Ajaraie",
    jerseyNumber: 41,
    nationality: "Morocco",
    position: "STRIKER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370070/ALAEDDINE_AJARAIE_ST_41_lddlnd.webp",
  },
  {
    fullName: "Gustavo Almeida",
    jerseyNumber: 70,
    nationality: "Brazil",
    position: "STRIKER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370072/GUSTAVO_ALMEIDA_ST_70_rjbjyb.webp",
  },
  {
    fullName: "Eksel Runtukahu",
    jerseyNumber: 98,
    nationality: "Indonesia",
    position: "STRIKER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370072/EKSEL_RUNTUKAHU_ST_98_lm7bwr.webp",
  },
  {
    fullName: "Emaxwell Souza",
    jerseyNumber: 99,
    nationality: "Brazil",
    position: "STRIKER",
    avatar:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774370071/EMAXWELL_SOUZA_ST_99_zrdpbe.webp",
  },
];

export function PlayerSection() {
  return (
    <section className="relative flex min-h-220 min-w-screen flex-col justify-center overflow-hidden bg-primary px-8 pb-20 pt-16 text-center lg:px-22">
      <img
        src={optimizeCloudinaryImage(
          "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774187413/db1084e5-e807-44aa-a085-4d79cec7efda_kdqfg9.jpg",
          { width: 1600, height: 1200, gravity: "auto" },
        )}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-10"
      />

      <div className="relative z-10 flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
            Persija Jakarta
          </p>
          <h2 className="rounded-2xl bg-background px-6 py-3 text-4xl font-bold text-foreground shadow-2xl lg:text-[60px]">
            THE <span className="text-primary">TIGERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((player) => (
            <div
              key={player.jerseyNumber}
              className="group relative flex min-h-104 flex-col overflow-hidden  bg-background shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="relative h-80 w-full overflow-hidden lg:h-104">
                <img
                  src={optimizeCloudinaryImage(player.avatar, {
                    width: 720,
                    height: 960,
                    gravity: "face",
                  })}
                  alt={player.fullName}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg">
                  {player.jerseyNumber}
                </span>
              </div>

              <div className="flex min-h-28 flex-1 flex-col items-center justify-center gap-1 px-4 py-5 uppercase">
                <h3 className="line-clamp-2 wrap-break-word text-[18px] leading-tight font-bold text-primary">
                  {player.fullName}
                </h3>
                <p className="text-sm font-semibold leading-tight text-foreground/80">
                  {player.position}
                </p>
                <p className="text-sm leading-tight text-foreground/70">
                  {player.nationality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
