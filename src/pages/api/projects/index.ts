import { Project } from "@/types/api_responses";
import type { NextApiRequest, NextApiResponse } from "next";

const uri = process.env.MONGODB_URI;

type Data = {
  projects: Project[];
};

export const projects = [
  {
    id: "1",
    title: "Swapabee",
    link: "https://swapabee.ch/",
    image:
      "https://play-lh.googleusercontent.com/GmP5XB2gurNFL4kQdNWC6z0fA3kxnj29hveGj9qeEH_a_POhMhCZqayiqM7kgMbXQ8k",
  },
  {
    id: "2",
    title: "WeBuyInDubai",
    link: "https://webuyindubai.com/",
    image:
      "https://lp-cms-production.imgix.net/features/2017/09/dubai-marina-skyline-2c8f1708f2a1.jpg?auto=format&q=75&w=1920",
  },
  {
    id: "3",
    title: "Arioso Investment AG",
    link: "https://arioso-investment.ch/",
    image:
      "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
  },
  {
    id: "4",
    title: "Reactify IT Solutions",
    link: "https://reactify-solutions.com",
    image:
      "https://www.logixshapers.com/BlogImages/Pros%20and%20Cons%20of%20React%20JS%20and%20React%20Native.png",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(projects);
}
