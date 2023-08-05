import IProject from "../interfaces/IProject";

import { BiLogoGithub, BiLogoReact } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";

const size = 22;

const githubIcon = <BiLogoGithub size={size} />;
const linkIcon = <BsLink45Deg size={size} />;
const reactIcon = <BiLogoReact size={size} />;

const ProjectsList: IProject[] = [
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae.",
    image: "https://via.placeholder.com/150",

    technologies: ["React", "VueJS", "TailwindCSS"],
    technologiesIcons: [reactIcon, reactIcon, reactIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com",
      },

      {
        icon: linkIcon,
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae.",
    image: "https://via.placeholder.com/150",

    technologies: ["React", "VueJS", "TailwindCSS"],
    technologiesIcons: [reactIcon, reactIcon, reactIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com",
      },

      {
        icon: linkIcon,
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae.",
    image: "https://via.placeholder.com/150",

    technologies: ["HTML", "CSS", "Javascript"],
    technologiesIcons: [reactIcon, reactIcon, reactIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com",
      },

      {
        icon: linkIcon,
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae.",
    image: "https://via.placeholder.com/150",

    technologies: ["React", "VueJS", "TailwindCSS"],

    technologiesIcons: [reactIcon, reactIcon, reactIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com",
      },

      {
        icon: linkIcon,
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae.",
    image: "https://via.placeholder.com/150",

    technologies: ["React", "VueJS", "TailwindCSS"],

    technologiesIcons: [reactIcon, reactIcon, reactIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com",
      },

      {
        icon: linkIcon,
        url: "https://github.com",
      },
    ],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae.",
    image: "https://via.placeholder.com/150",

    technologies: ["React", "VueJS", "TailwindCSS"],

    technologiesIcons: [reactIcon, reactIcon, reactIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com",
      },

      {
        icon: linkIcon,
        url: "https://github.com",
      },
    ],
  },
];

export default ProjectsList;
