import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Process a GET request - get specific project data
    res.status(200).json({ id: req.query.id, title: "project", description: "description" });
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
}
