import { Project, Service } from "../types/types";

export interface HomeProps {
  projects: Project[];
  services: Service[];
}
export interface SingleProjectProps {
  project: Project;
}
