import { getAllProjects } from "@/utils/projects";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getAllProjects();
  const allProjects = data.allProjects;
  res.status(200).json({ allProjects });
}
