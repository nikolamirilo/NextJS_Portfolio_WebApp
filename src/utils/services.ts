import clientPromise from "@/lib/mongodb";

export const getAllServices = async () => {
  const client = await clientPromise;
  const db = client.db("NextJS_PortfolioApp");
  const allServices = (await db.collection("services").find({}).toArray()).sort(
    (a, b) => a.id - b.id
  );
  return { allServices };
};

export const getSingleService = async (id: number) => {
  const { allServices } = await getAllServices();
  const singleService = allServices.find((singleService) => singleService.id == id);
  return { singleService };
};
