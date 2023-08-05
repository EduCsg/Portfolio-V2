interface IProject {
  title: string;
  description: string;
  image: string;

  technologies: string[];
  technologiesIcons: any[];

  links: {
    icon: any;
    url: string;
  }[];
}

export default IProject;
