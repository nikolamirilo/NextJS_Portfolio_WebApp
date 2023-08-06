import { Project, Service } from "../types/types";

export interface PortfolioProps {
  data: Project[];
}
export interface ServicesProps {
  data: Service[];
}
export interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
}
