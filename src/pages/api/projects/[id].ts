import { getSingleProject } from "@/utils/projects";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.setHeader("Cache-Control", "s-maxage=86400");
    if (req.method === "GET") {
      // Process a GET request - get specific project data
      const id = Number(req.query.id);
      const data = await getSingleProject(id);
      const singleProject = data ? data.singleProject : {};
      res.status(200).json({ singleProject });
    } else if (req.method === "POST") {
      // Process a POST request - add new project
      res.status(200).json("POST request of project " + req.query.id);
    } else if (req.method === "PUT") {
      // Process a PUT request - update existing project
      res.status(200).json("PUT request of project " + req.query.id);
    } else {
      // Handle unsupported HTTP methods
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
