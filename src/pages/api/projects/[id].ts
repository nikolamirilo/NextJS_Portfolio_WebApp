import { NextApiRequest, NextApiResponse } from "next";

const projects = [
  {
    id: "1",
    title: "Swapabee",
    link: "https://swapabee.ch/",
    image: "https://play-lh.googleusercontent.com/GmP5XB2gurNFL4kQdNWC6z0fA3kxnj29hveGj9qeEH_a_POhMhCZqayiqM7kgMbXQ8k",
  },
  {
    id: "2",
    title: "WeBuyInDubai",
    link: "https://webuyindubai.com/",
    image: "https://play-lh.googleusercontent.com/GmP5XB2gurNFL4kQdNWC6z0fA3kxnj29hveGj9qeEH_a_POhMhCZqayiqM7kgMbXQ8k",
  },
  {
    id: "3",
    title: "Arioso Investment AG",
    link: "https://arioso-investment.ch/",
    image: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Process a GET request - get specific project data
    res.status(200).json(projects[req.query.id]);
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
