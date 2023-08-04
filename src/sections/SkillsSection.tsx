import { useState } from "react";

import { arrow_forward, dinosaur, fossil } from "../assets/exports";
import ActionButton from "../components/ActionButton";
import { ISkill } from "../interfaces/ISkill";

import skillsList from "../constants/SkillsList";

interface Props {
  theme: string;
}

const SkillsSection = ({ theme }: Props) => {
  // Só para não quebrar o build
  theme = theme;

  const defaultSkill: ISkill = {
    title: "Veja minhas habilidades!",
    description:
      "Passe o mouse sobre qualquer um dos ícones ao lado para ver mais detalhes e ler sobre minha experiência com cada um!",
    icon: "",
    color: "",

    level: "XX",
    experience: "XX anos",
  };

  const [activeSkill, setActiveSkill] = useState<ISkill>(defaultSkill);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-backgroundSecondary"
    >
      {" "}
      <main className="mx-auto flex h-full w-full max-w-[80vw] flex-col items-center gap-20 pt-36 sm:gap-32 lg:max-w-4xl">
        <h1 className="whitespace-nowrap text-4xl font-bold text-white xs:text-5xl lg:text-7xl">
          Skills
        </h1>

        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-stretch">
          {/* Skills data */}
          <div className="hidden h-auto max-w-[70vw] flex-col justify-between gap-10 py-2 text-white sm:flex lg:w-1/2 lg:max-w-none">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold">{activeSkill.title}</h1>
              <p className="text-base font-normal lg:max-w-[90%]">
                {activeSkill.description}
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p>
                  <span className="font-bold">Nível:</span> {activeSkill.level}
                </p>
                <p>
                  <span className="font-bold">Experiência:</span>{" "}
                  {activeSkill.experience}
                </p>
              </div>

              <div>
                <ActionButton
                  text="Ver projetos"
                  color="primary"
                  icon={arrow_forward}
                  rotate
                  link="#projects"
                />
              </div>
            </div>
          </div>

          <div className="z-30 flex flex-wrap justify-center gap-x-4 gap-y-4 sm:max-w-[70vw] lg:w-1/2">
            {skillsList.map((skill) => (
              <div
                key={skill.title}
                onMouseOver={() => setActiveSkill(skill)}
                item-data={skill.title}
                className={`flex w-[30%] flex-grow cursor-pointer flex-col items-center justify-center rounded-md py-4 text-center

                ${
                  skill.title !== activeSkill.title
                    ? "bg-[#102237]"
                    : "bg-[#104380]"
                }`}
              >
                <div
                  className={`
                  ${
                    skill.title !== activeSkill.title
                      ? "text-white"
                      : skill.color
                  }
                `}
                >
                  {skill.icon}
                </div>

                <p className="text-white">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <img
        className="absolute left-0 top-0 hidden md:block"
        src={fossil}
        alt="Imagem de fóssil para decorar a seção de Habilidades"
      />
      <img
        className="absolute bottom-16 right-0"
        src={dinosaur}
        alt="Imagem de dinossauro para decorar a seção de Habilidades"
      />
    </section>
  );
};

export default SkillsSection;
