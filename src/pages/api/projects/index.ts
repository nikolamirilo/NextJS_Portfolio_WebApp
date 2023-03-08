import { Project } from "@/typescript/types/types";
import { getAllProjects } from "@/utils/projects";
import type { NextApiRequest, NextApiResponse } from "next";

type Projects = {
  allProjects: Project[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getAllProjects();
  const allProjects = data.allProjects;
  res.setHeader("Cache-Control", "s-maxage=10");
  res.status(200).json({ allProjects });
}
