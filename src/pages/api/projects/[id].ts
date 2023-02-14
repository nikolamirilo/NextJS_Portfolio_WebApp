import { Project } from "@/types/api_responses";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<Project>) {
  if (req.method === "GET") {
    // Process a GET request - get specific project data
    res.status(200).json({ id: req.query.id, title: "project", description: "description" });
  } else if (req.method === "POST") {
    // Process a POST request - add new project
  } else if (req.method === "PUT") {
    // Process a PUT request - update existing project
  }
}
