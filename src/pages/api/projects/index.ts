import { Project } from "@/typescript/types/types";
import { getAllProjects } from "@/utils/projects";
import type { NextApiRequest, NextApiResponse } from "next";

type Projects = {
  allProjects: Project[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getAllProjects();
    const allProjects = data ? data.allProjects : {};
    res.setHeader("Cache-Control", "s-maxage=86400");
    res.status(200).json({ allProjects });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
