import { Service } from "@/typescript/types/types";
import { getAllServices } from "@/utils/services";
import type { NextApiRequest, NextApiResponse } from "next";

type Services = {
  allServices: Service[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await getAllServices();
    const allServices = data ? data.allServices : {};
    res.setHeader("Cache-Control", "s-maxage=86400");
    res.status(200).json({ allServices });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
