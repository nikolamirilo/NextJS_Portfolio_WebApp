import { ReactNode } from "react";

export interface CardProps {
  id?: string;
  title: string;
  link?: string;
  subtitle: string;
  image: string;
  type: string;
}
export interface NodeProps {
  title: string;
  description: string;
  image: string;
  date: string;
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
