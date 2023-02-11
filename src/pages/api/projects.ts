// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    cards: [
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
          "https://play-lh.googleusercontent.com/GmP5XB2gurNFL4kQdNWC6z0fA3kxnj29hveGj9qeEH_a_POhMhCZqayiqM7kgMbXQ8k",
      },
      {
        id: "3",
        title: "Arioso Investment AG",
        link: "https://arioso-investment.ch/",
        image: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
      },
    ],
  });
}
