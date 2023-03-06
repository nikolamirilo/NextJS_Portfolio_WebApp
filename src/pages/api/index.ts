import clientPromise from "@/lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export const getDataFromDatabase = async (id: number) => {
  const client = await clientPromise;
  const db = client.db("NextJS_PortfolioApp");
  const allProjects = (await db.collection("projects").find({}).toArray()).sort(
    (a, b) => a.id - b.id
  );
  const singleProject = allProjects.find((singleProject) => singleProject.id == id);
  return { allProjects, singleProject };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "s-maxage=10");
  res.json({ status: 200, message: "This is /api route" });
}
