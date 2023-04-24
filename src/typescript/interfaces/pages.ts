import { Project, Service } from "../types/types";
import { HeroProps } from "./sections";

export interface HomeProps {
  projects: Project[];
  services: Service[];
  heroInformation: HeroProps;
}
export interface SingleProjectProps {
  project: Project;
}
