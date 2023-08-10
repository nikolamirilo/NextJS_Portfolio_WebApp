import { ReactNode } from "react";
export type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};
export type Service = {
  title: string;
  description: string;
  image: string
};
export type GeneralContextProviderProps = {
  children: ReactNode;
};
