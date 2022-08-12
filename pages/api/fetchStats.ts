// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const fetcher = async (
  input: RequestInfo,
  init: RequestInit
): Promise<JSON> => {
  const res = await fetch(input, init);
  return res.json();
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: "Success" });
}
