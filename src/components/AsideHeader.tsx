import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

interface Props {
  toggleTheme: () => void;
}

const AsideHeader = ({ toggleTheme }: Props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weekToday = days[new Date().getDay()].substring(0, 3);
  const monthToday =
    time.getDate() < 10 ? "0" + time.getDate() : time.getDate();

  const today = weekToday + "/" + monthToday;

  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const now = hours + ":" + minutes;

  return (
    // <div className="fixed left-3 top-3 z-50 flex items-center gap-4 rounded-full bg-[rgba(255,255,255,.1)] px-4 py-2 text-white backdrop-blur-md transition-all duration-500 sm:right-5 sm:top-8 sm:px-7">
    <div className="fixed left-5 right-auto top-3 z-50 flex items-center gap-4 rounded-full bg-[rgba(255,255,255,.1)] px-7 py-2 text-white backdrop-blur-md transition-all duration-500 sm:left-auto sm:right-5 sm:top-24 md:px-7 ml:top-8">
      <div className="flex flex-col text-center leading-snug">
        <p className="font-bold">{now}</p>
        <p>{today}</p>
      </div>

      <div className="flex">
        <ThemeSwitcher toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default AsideHeader;
