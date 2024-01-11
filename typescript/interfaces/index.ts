import { ReactNode } from "react";

export interface CardProps {
  title: string;
  link: string;
  description: string;
  image: string;
}
export interface NodeProps {
  title: string;
  description: string;
  image: string;
  date?: string;
}
export interface SkillProps {
  title: string;
  progress: number;
  progressValue: number;
}
export interface ServiceProps {
  title: string;
  idx: number;
  description: string;
}
