import { ISkill } from "../interfaces/ISkill";

import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoVuejs,
  BiLogoGithub,
  BiLogoJava,
} from "react-icons/bi";

const skillsList: ISkill[] = [
  {
    title: "HTML",
    description:
      "HTML5 foi o meu primeiro contato com o desenvolvimento. Até hoje, muito presente nos meus estudos! Pois são focados principalmente em desenvolvimento Web.",
    icon: <BiLogoHtml5 size={65} />,
    color: "text-[#E34F26]",

    level: "Avançado",
    experience: "+3 anos",
  },
  {
    title: "CSS",
    description:
      "Juntamente ao HTML, o CSS é uma das minhas paixões! Se encontra muito presente no meu dia a dia, constantemente estou estudando e aprendendo novas técnicas e funcionalidades!",
    icon: <BiLogoCss3 size={65} />,
    color: "text-[#1572B6]",

    level: "Avançado",
    experience: "+3 anos",
  },
  {
    title: "TailwindCSS",
    description:
      "Minha experiência no TailwindCSS é recente, mas estou adorando! É uma ferramenta que me ajuda muito, principalmente pela sua facilidade de uso e produtividade. Diariamente encontro e soluciono novos desafios devido ao Tailwind e sua possibilidade de criar condições!",
    icon: <BiLogoTailwindCss size={65} />,
    color: "text-[#06B6D4]",

    level: "Intermediário",
    experience: "-1 ano",
  },
  {
    title: "Javascript",
    description:
      "O Javascript foi minha primeira e principal linguagem de programação até hoje! É uma linguagem que me sinto muito confiante utilizando e até hoje sempre me surpreende com suas funcionalidades. Até hoje, me atende muito bem e é a linguagem que mais utilizo!",
    icon: <BiLogoJavascript size={65} />,
    color: "text-[#F7DF1E]",

    level: "Intermediário/Avançado",
    experience: "+3 anos",
  },
  {
    title: "Typescript",
    description:
      "O Typescript é uma linguagem que estou estudando atualmente. Por ser um superset do Javascript, me adaptei muito facilmente e já me livrou de diversos bugs antes da hora de testar!",
    icon: <BiLogoTypescript size={65} />,
    color: "text-[#3178C6]",

    level: "Intermediário",
    experience: "+1 ano",
  },
  {
    title: "React.JS",
    description:
      "O ReactJS foi o primeiro framework que estudei. Através dele, aprendi muito sobre reutilização de código, boas práticas, organização e tratei da integração de APIs pela primeira vez!",
    icon: <BiLogoReact size={65} />,
    color: "text-[#61DAFB]",

    level: "Intermediário",
    experience: "+1 ano",
  },
  {
    title: "VueJS",
    description:
      "Após me tornar mais familiarizado com o React, decidi estudar o VueJS. Através dele, aprendi ainda mais sobre layouts, componentização, boas práticas e com ele consegui o meu primeiro estágio em desenvolvimento!",
    icon: <BiLogoVuejs size={65} />,
    color: "text-[#4FC08D]",

    level: "Intermediário",
    experience: "-1 ano",
  },
  {
    title: "Github",
    description:
      "O Github sempre esteve presente desde o meu primeiro curso de desenvolvimento. Desde o início, sempre utilizei o Github para hospedar meus projetos e mantê-los o mais organizado possível!",
    icon: <BiLogoGithub size={65} />,
    color: "text-[#181717]",

    level: "Intermediário/Avançado",
    experience: "+3 anos",
  },
  {
    title: "Java",
    description:
      "No Java, ainda estou dando meus primeiros passos. Mas já estou gostando muito! É uma linguagem que me sinto muito confortável utilizando e que me desafia a cada dia.",
    icon: <BiLogoJava size={65} />,
    color: "text-[#e11f21]",

    level: "Iniciante",
    experience: "-1 ano",
  },
];

export default skillsList;
