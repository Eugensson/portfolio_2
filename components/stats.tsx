import CountUp from "react-countup";

import { STATS_DATA } from "@/constants";

export const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {STATS_DATA.map(({ endCountNum, endCountText, text }, index) => {
        return (
          <StatsItem
            key={index}
            index={index}
            endCountNum={endCountNum}
            endCountText={endCountText}
            text={text}
          />
        );
      })}
    </section>
  );
};

interface StatsItemProps {
  endCountNum: number;
  endCountText: string;
  text: string;
  index: number;
}

const StatsItem = ({
  endCountNum,
  endCountText,
  text,
  index,
}: StatsItemProps) => {
  return (
    <div className="flex xl:flex-1 flex-col items-center text-center">
      <div className="text-primary font-primary text-4xl xl:text-5xl leading-none">
        <CountUp end={endCountNum} delay={1} duration={4} key={index} />
        <span>{endCountText}</span>
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};
