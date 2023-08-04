interface IProject {
  title: string;
  description: string;
  image: string;

  technologies: string[];

  // List of links with ICON and URL
  links: {
    icon: string;
    url: string;
  }[];
}

export default IProject;
