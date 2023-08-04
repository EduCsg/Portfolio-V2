import { Divider02 } from "../assets/exports";
import ProjectsList from "../constants/ProjectsList";

type Props = {
  theme?: string;
};

const ProjectsSection = ({ theme }: Props) => {
  // nao quebrar o build
  theme = theme;

  const technologies = [
    "Todas",
    "HTML + CSS",
    "Javascript",
    "Typescript",
    "React",
    "VueJS",
    "TailwindCSS",
  ];

  return (
    <section>
      <img className="w-screen" src={Divider02} alt="" />

      <main
        id="projects"
        className="flex min-h-[90vh] flex-col gap-28 bg-backgroundTertiary py-28"
      >
        <div className="flex justify-center gap-3">
          {technologies.map((technology, index) => (
            <button
              key={index}
              className="w-44 rounded-md bg-backgroundSecondary py-2 text-xl font-bold text-white hover:bg-primary"
            >
              {technology}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {ProjectsList.map((project, index) => (
            <div
              key={index}
              className="flex max-w-xs flex-col items-center rounded-xl bg-backgroundPrimary p-4"
            >
              <img
                src={project.image}
                className="h-36 w-36 object-cover"
                alt={`Imagem do projeto ${project.title}`}
              />

              <h1 className="text-center text-4xl font-bold text-white">
                {project.title}
              </h1>

              <p className="max-w-[80%] text-center text-white">
                {project.description}
              </p>

              <div className="flex w-full justify-between pb-2 pt-4">
                <div className="flex gap-2">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-backgroundSecondary px-2 py-1 text-sm font-bold text-white"
                    >
                      A
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-backgroundSecondary px-2 py-1 text-sm font-bold text-white"
                    >
                      {link.icon}
                    </a>
                  ))}

                  {/* <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-backgroundSecondary px-2 py-1 text-sm font-bold text-white"
                  >
                    G
                  </a>

                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-backgroundSecondary px-2 py-1 text-sm font-bold text-white"
                  >
                    S
                  </a> */}
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
