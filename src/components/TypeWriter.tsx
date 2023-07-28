import { useRef, useEffect } from "react";

const TypeWriter = () => {
  const el = useRef<HTMLInputElement>(null);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrases = [
    "Welcome to my Portfolio!",
    "Fullstack Developer",
    "Computer Science student!",
  ];

  const sleepTime = 80;

  const writeLoop = async () => {
    while (true) {
      for (let j = 0; j < phrases.length; j++) {
        let curPhrase = phrases[j];

        for (let i = 0; i <= curPhrase.length; i++) {
          el.current!.innerText = curPhrase.substring(0, i);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curPhrase.length; i >= 0; i--) {
          el.current!.innerText = curPhrase.substring(0, i);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);
      }
    }
  };

  useEffect(() => {
    writeLoop();
  }, []);

  return (
    <div className="w-auto">
      <span
        className="animate-blink border-r-4 border-solid border-primary pr-1 text-primary"
        ref={el}
      ></span>
    </div>
  );
};

export default TypeWriter;
