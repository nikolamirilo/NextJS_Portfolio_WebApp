import { Project } from "@/typescript/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { getDataFromDatabase } from "./../index";

type Projects = {
  allProjects: Project[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getDataFromDatabase(0);
  const allProjects = data.allProjects;
  res.setHeader("Cache-Control", "s-maxage=10");
  res.status(200).json({ allProjects });
}
