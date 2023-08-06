import IProject from "../interfaces/IProject";

import * as Projects from "../assets/projects/exports";

import {
  BiLogoGithub,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoCss3,
  BiLogoFlutter,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoJava,
  BiLogoBehance,
} from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";

const size = 22;

const githubIcon = <BiLogoGithub size={size} />;
const linkIcon = <BsLink45Deg size={size} />;
const reactIcon = <BiLogoReact size={size} />;
const htmlIcon = <BiLogoHtml5 size={size} />;
const cssIcon = <BiLogoCss3 size={size} />;
const javascriptIcon = <BiLogoJavascript size={size} />;
const flutterIcon = <BiLogoFlutter size={size} />;
const typescriptIcon = <BiLogoTypescript size={size} />;
const tailwindIcon = <BiLogoTailwindCss size={size} />;
const javaIcon = <BiLogoJava size={size} />;
const behanceIcon = <BiLogoBehance size={size} />;

const ProjectsList: IProject[] = [
  // FiredLabs
  {
    title: "FiredLabs",
    description:
      "O Curso de HTML e CSS Feliz da FiredLabs foi o meu primeiro curso realizado, onde aprendi os fundamentos de HTML, CSS e uma pitada de JS!",
    image: Projects.FiredLabs,

    technologies: ["HTML", "CSS", "Javascript"],
    technologiesIcons: [htmlIcon, cssIcon, javascriptIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com/EduCsg/Curso-HTML-CSS-FiredLabs",
      },

      {
        icon: linkIcon,
        url: "https://educsg.github.io/Curso-HTML-CSS-FiredLabs/",
      },
    ],
  },

  // My Portfolio V1
  {
    title: "Meu Portfólio V1",
    description:
      "O meu primeiro portfólio foi desenvolvido com HTML, CSS e JS. Foi o meu primeiro grande desafio pessoal, onde aprendi muito sobre desenvolvimento web!",
    image: Projects.PortfolioV1,

    technologies: ["HTML", "CSS", "Javascript"],
    technologiesIcons: [htmlIcon, cssIcon, javascriptIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com/EduCsg/MyPortfolio",
      },

      {
        icon: linkIcon,
        url: "https://educsg.github.io/MyPortfolio/",
      },
    ],
  },

  // Fast Form
  {
    title: "Fast Form",
    description:
      "A FastForm é um projeto de TCC, onde a iniciativa é gerar um prontuário digital via aplicativo. O app foi projetado por Giovanny Marin e desenvolvido por mim!",
    image: Projects.FastForm,

    technologies: ["Flutter", "Dart"],
    technologiesIcons: [flutterIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com/EduCsg/FastForm",
      },
    ],
  },

  // Curso React
  {
    title: "React do zero",
    description:
      "O curso de React do zero da Hora de Codar foi o meu primeiro contato com ReactJS. Aprendi os fundamentos do React e desenvolvi diversos projetos durante o curso!",
    image: Projects.Udemy,

    technologies: ["ReactJS", "Javascript", "Typescript"],
    technologiesIcons: [reactIcon, javascriptIcon, typescriptIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com/EduCsg/Curso_React",
      },
    ],
  },

  // // POO com JS
  // {
  //   title: "POO com Javascript",
  //   description:
  //     "O curso de POO com Javascript da Cod3r foi o meu primeiro contato com POO. Aprendi os fundamentos da POO e desenvolvi um projeto de um sistema de cadastro de usuários!",
  //   image: Projects.Udemy,

  //   technologies: ["Javascript"],
  //   technologiesIcons: [javascriptIcon],

  //   links: [
  //     {
  //       icon: githubIcon,
  //       url: "https://github.com/EduCsg/POO-com-JS",
  //     },
  //   ],
  // },

  // Curso Typescript
  // {
  //   title: "Typescript do zero",
  //   description:
  //     "O curso de Typescript do zero da Cod3r foi o meu primeiro contato com Typescript. Aprendi os fundamentos do Typescript e desenvolvi um projeto de um sistema de cadastro de usuários!",
  //   image: Projects.Udemy,

  //   technologies: ["Typescript"],
  //   technologiesIcons: [typescriptIcon],

  //   links: [
  //     {
  //       icon: githubIcon,
  //       url: "https://github.com/EduCsg/Curso_Typescript",
  //     },
  //   ],
  // },

  // POO com Java
  {
    title: "POO com Java",
    description:
      "O curso de POO com Java foi o meu primeiro contato com Java. Reaprendi os principais fundamentos da POO em uma linguagem mais complexa, tipada e dessa vez, orientada a objetos!",
    image: Projects.AdaTech,

    technologies: ["Java"],
    technologiesIcons: [javaIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com/EduCsg/POO-com-Java",
      },
    ],
  },

  // Pumpkabank
  {
    title: "Pumpkabank!",
    description:
      "Foi um projeto onde pude adquirir diversas experiências, tanto no Typescript quando na área de UI. Desenhado por Giovanny Marin e desenvolvido por mim!",
    image: Projects.Pumpkabank,

    technologies: ["ReactJS", "Typescript", "TailwindCSS"],
    technologiesIcons: [reactIcon, typescriptIcon, tailwindIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com/EduCsg/Pumpkabank-Site",
      },
      {
        icon: behanceIcon,
        url: "https://www.behance.net/gallery/173100555/Pumpkabank-Banco-Digital-Pokmon",
      },
      {
        icon: linkIcon,
        url: "https://pumpkabank.vercel.app/",
      },
    ],
  },

  // Rick and Morty API
  {
    title: "Rick and Morty API",
    description:
      "Esse projeto foi desenvolvido com VueJS e Javascript. Através dele, aprendi os fundamentos do VueJS e, para aumentar a complexidade do projeto, utilizei API's!",
    image: Projects.RickWiki,

    technologies: ["VueJS", "Javascript"],
    technologiesIcons: [reactIcon, javascriptIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com/EduCsg/RickWiki",
      },
      {
        icon: linkIcon,
        url: "https://rickwiki.vercel.app/",
      },
    ],
  },

  // My Portfolio V2
  {
    title: "Meu Portfólio V2",
    description:
      "Esse é o projeto que você está vendo agora! Após aprimorar minhas habilidades, decidi refazer meu portfólio para aprimorá-lo também!",
    image: Projects.PortfolioV2,

    technologies: ["ReactJS", "Typescript", "TailwindCSS"],
    technologiesIcons: [reactIcon, typescriptIcon, tailwindIcon],

    links: [
      {
        icon: githubIcon,
        url: "https://github.com/EduCsg/Portfolio-V2",
      },

      {
        icon: linkIcon,
        url: "https://educsg.vercel.app",
      },
    ],
  },
];

export default ProjectsList;
