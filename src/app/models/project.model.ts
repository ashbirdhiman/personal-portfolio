export interface ProjectItem {
  title: string;
  date: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}
