import { ReactNode } from "react";
export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
};
export type Service = {
  id: string;
  title: string;
  description: string;
  image: string
};
export type GeneralContextProviderProps = {
  children: ReactNode;
};
