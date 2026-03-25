import { getNextMatch, type IMatch } from "@/api/match/getNextMatch.api";
import { useEffect, useState } from "react";

export function NextMatchSection() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [nextMatch, setNextMatch] = useState<IMatch[]>([]);
  const [isLoaded, setIsloaded] = useState<Boolean>(false);

  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      const now = new Date();
      const diffrence = new Date(match.matchDate).getTime() - now.getTime();
      const d = Math.floor(diffrence / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diffrence % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  const match = nextMatch[0];

  useEffect(() => {
    const getOpponent = async () => {
      try {
        const response = await getNextMatch();
        if (!response) return;
        setIsloaded(true);
        setNextMatch(response.data.data);
      } catch (error) {
        console.error("Failed to fetch next match:", error);
      }
    };

    getOpponent();
  }, []);

  if (!match) {
    return (
      <section className="relative min-h-80 min-w-screen text-foreground"></section>
    );
  }

  return (
    <section className="relative min-w-screen text-foreground bg-secondary">
      <div className="h-full w-full flex justify-center">
        <div className="min-h-80 flex w-fit justify-center flex-col  items-center">
          <div className="flex min-w-79 gap-4  ">
            <div className="aspect-square max-h-22 ">
              <img
                className="h-full w-full object-cover"
                src={match.opponentLogo}
                alt={match.opponent}
              />
            </div>
            <div className=" w-full h-full gap-4 flex pb-4 flex-col uppercase border-b ">
              <div className="text-[24px] font-medium  -space-y-1  ">
                <p className={match.matchType === "AWAY" ? "" : "text-primary"}>
                  {match.matchType === "HOME"
                    ? "PERSIJA JAKARTA"
                    : match.opponent
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")
                        .toUpperCase()}
                </p>
                <p className={match.matchType === "AWAY" ? "text-primary" : ""}>
                  {match.matchType === "AWAY"
                    ? "PERSIJA JAKARTA"
                    : match.opponent}
                </p>
                <p className="text-[12px] font-semibold text-gray-500">
                  {match.location}
                </p>
              </div>
              <div className="text-[12px] font-semibold  ">
                <p>
                  {new Date(match.matchDate).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </p>
                <p className="text-gray-500">INDONESIA SUPER LEAGUE</p>
              </div>
            </div>
          </div>

          {/* timer */}

          <div className="flex w-full p-4 border-b uppercase gap-2 items-center justify-center">
            <div className=" flex flex-col items-center -space-y-2.5">
              <p className="text-[40px] font-medium text-primary ">{days}</p>
              <p className="text-[12px] font-bold">days</p>
            </div>
            <p className="font-bold text-[24px]">:</p>
            <div className=" flex flex-col items-center -space-y-2.5">
              <p className="text-[40px] font-medium text-primary">{hours}</p>
              <p className="text-[12px] font-bold">hrs</p>
            </div>
            <p className="font-bold text-[24px]">:</p>
            <div className=" flex flex-col items-center -space-y-2.5">
              <p className="text-[40px] font-medium text-primary">{minutes}</p>
              <p className="text-[12px] font-bold">mins</p>
            </div>
            <p className="font-bold text-[24px]">:</p>
            <div className=" flex flex-col items-center -space-y-2.5">
              <p className="text-[40px] font-medium text-primary">{seconds}</p>
              <p className="text-[12px] font-bold">secs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
