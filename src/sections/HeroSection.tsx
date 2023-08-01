// react
import { memo, useEffect, useState } from "react";

// components
import DotGrid from "../components/DotGrid";
import ActionButton from "../components/ActionButton";
import ScrollAnimation from "../components/ScrollAnimation";
import TypeWriter from "../components/TypeWriter";

// assets
import { arrow_forward, github_logo } from "../assets/exports";

interface Props {
  theme?: string;
}

const HeroSection = ({ theme }: Props) => {
  const [biggerThan1440, setBiggerThan1440] = useState<boolean>(false);

  // Log para usar a variável não quebrar o build
  console.log(theme);

  // On load
  useEffect(() => {
    if (window.innerWidth > 1440) {
      setBiggerThan1440(true);
    } else if (window.innerWidth < 1440 && window.innerWidth > 1022) {
      setBiggerThan1440(false);
    } else {
      setBiggerThan1440(false);
    }
  }, []);

  // When resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1440) {
      setBiggerThan1440(true);
    } else if (window.innerWidth < 1440) {
      setBiggerThan1440(false);
    }
  });

  return (
    <section className="bg-backgroundPrimary" id="home">
      <main className="relative mx-4 flex items-center lg:mx-20 xxl:mx-44 3xl:mx-64">
        <div className="flex w-screen justify-center sm:justify-center lg:justify-start">
          <div className="flex h-screen flex-col justify-center">
            <div className="flex flex-col items-start gap-8">
              <h1 className="z-20 max-w-[90vw] text-4xl font-bold text-white xs:text-5xl lg:text-7xl ">
                Eduardo Casagrande
              </h1>
              <h2 className="text-2xl font-bold text-primary xs:text-3xl lg:text-5xl">
                <TypeWriter />
              </h2>
            </div>

            <div className="z-20 mt-14 flex basis-10 flex-col gap-6 sm:flex-row">
              <ActionButton
                rotate
                text="Ver mais"
                icon={arrow_forward}
                color="primary"
                link="#about"
              />

              <ActionButton
                text="Github"
                icon={github_logo}
                externalLink
                color="black"
                link="https://github.com/eduCsg"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-0">
          <div className="relative grid place-content-center">
            <div className="hidden lg:flex">
              {biggerThan1440 ? (
                <DotGrid quantity={25} />
              ) : (
                <DotGrid quantity={16} />
              )}
            </div>
          </div>
        </div>
      </main>

      <ScrollAnimation />
    </section>
  );
};

export default memo(HeroSection);
