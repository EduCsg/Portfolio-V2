import { useEffect, useState } from "react";
import { Divider02 } from "../assets/exports";
import ProjectsList from "../constants/ProjectsList";

type Props = {
  theme?: string;
};

const ProjectsSection = ({ theme }: Props) => {
  // p nao quebrar o build
  theme = theme;

  const technologies = [
    "Todas",
    "HTML + CSS",
    "Javascript",
    "Typescript",
    "ReactJS",
    "VueJS",
    "TailwindCSS",
    "Java",
  ];

  const [filteredProjectsList, setFilteredProjectsList] =
    useState(ProjectsList);
  const [activeTechnology, setActiveTechnology] = useState<string>("Todas");

  useEffect(() => {
    if (activeTechnology === "Todas") {
      setFilteredProjectsList(ProjectsList);
    } else if (activeTechnology === "HTML + CSS") {
      setFilteredProjectsList(
        ProjectsList.filter(
          (project) =>
            project.technologies.includes("HTML") &&
            project.technologies.includes("CSS"),
        ),
      );
    } else {
      setFilteredProjectsList(
        ProjectsList.filter((project) =>
          project.technologies.includes(activeTechnology),
        ),
      );
    }
  }, [activeTechnology]);

  return (
    <section>
      <img className="w-screen" src={Divider02} alt="" />

      <main
        id="projects"
        className="flex min-h-[90vh] flex-col items-center gap-20 bg-backgroundTertiary py-28"
      >
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-3xl font-bold text-white">
            Filtre por tecnologia!
          </h1>

          <div className="flex max-w-[90vw] flex-wrap justify-center gap-3">
            {technologies.map((technology, index) => (
              <button
                key={index}
                className={`w-44 rounded-md py-2 text-xl font-medium text-white transition-all hover:bg-[#794ae4cc]
                ${
                  activeTechnology === technology
                    ? "!bg-primary"
                    : "bg-backgroundSecondary"
                }`}
                onClick={() => setActiveTechnology(technology)}
              >
                {technology}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="flex max-w-[95vw] flex-wrap items-center justify-center gap-5 md:max-w-[90vw] xxl:max-w-[80vw]">
          {filteredProjectsList.length === 0 && (
            <h1 className="text-4xl font-bold text-white">
              Nenhum projeto encontrado!
            </h1>
          )}

          {filteredProjectsList &&
            filteredProjectsList.map((project, index) => (
              <div
                key={index}
                className="md:min-w-auto flex min-w-[250px] max-w-xs flex-col items-center justify-between gap-6 rounded-xl bg-backgroundPrimary p-4 ml:min-h-[450px] ml:w-auto ml:gap-0"
              >
                <div className="flex flex-col gap-4">
                  <img
                    src={project.image}
                    className="hidden h-36 w-[290px] object-cover md:block"
                    alt={`Imagem do projeto ${project.title}`}
                  />

                  <div className="flex flex-col items-center gap-3">
                    <h1 className="text-center text-2xl font-bold text-white">
                      {project.title}
                    </h1>

                    <p className="hidden max-w-[90%] text-white ml:block">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* CardBottom */}
                <div className="flex w-full flex-col gap-3 md:flex-row md:justify-between md:gap-0">
                  {/* Technologies */}
                  <div className="flex gap-2">
                    {project.technologiesIcons.map((technology, index) => (
                      <span
                        key={index}
                        className="cursor-pointer rounded-md bg-backgroundSecondary px-2 py-1  text-white transition-all duration-200 hover:bg-backgroundTertiary"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-backgroundSecondary px-2 py-1 text-white transition-all duration-200 hover:bg-primary"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </section>
  );
};

export default ProjectsSection;
