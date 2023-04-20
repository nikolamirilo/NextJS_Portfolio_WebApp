import clientPromise from "@/lib/mongodb";

export const getAllProjects = async () => {
  const client = await clientPromise;
  const db = client.db("NextJS_PortfolioApp");
  const allProjects = (await db.collection("projects").find({}).toArray()).sort((a, b) => a.id - b.id);
  return { allProjects };
};

export const getSingleProject = async (id: number) => {
  const { allProjects } = await getAllProjects();
  const singleProject = allProjects.find((singleProject) => singleProject.id == id);
  return { singleProject };
};
