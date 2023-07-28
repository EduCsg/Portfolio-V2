// react
import { useEffect, useState } from "react";

// components
import DotGrid from "../components/DotGrid";
import ActionButton from "../components/ActionButton";
import ScrollAnimation from "../components/ScrollAnimation";

// assets
import { arrow_forward, github_logo } from "../assets/exports";

const HeroSection = () => {
  const [biggerThan1440, setBiggerThan1440] = useState<boolean>(false);

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
    <section className="h-screen bg-backgroundPrimary">
      <main className="relative mx-4 flex items-center lg:mx-20 xxl:mx-44 3xl:mx-64">
        <div className="flex w-screen justify-center sm:justify-center lg:justify-start">
          <div className="flex h-screen flex-col justify-center ">
            <div className="flex flex-col items-start gap-8">
              <h1 className="z-50 text-5xl font-bold text-white lg:text-7xl ">
                Eduardo Casagrande
              </h1>
              <h2 className="text-3xl font-bold text-primary lg:text-5xl">
                Web Developer
              </h2>
            </div>

            <div className="z-50 mt-14 flex flex-col gap-6 xs:flex-row">
              <ActionButton
                text="Ver mais"
                icon={arrow_forward}
                color="primary"
                link="#about"
                onClick={() => {
                  console.log("arrow_forward");
                }}
              />

              <ActionButton
                text="Github"
                icon={github_logo}
                externalLink
                color="secondary"
                link="https://github.com/eduCsg"
                onClick={() => {
                  console.log("github_logo");
                }}
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

export default HeroSection;
