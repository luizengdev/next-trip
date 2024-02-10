import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";

export async function GET(
  request: Request,
  res: NextApiResponse,
  { params: { userId } }: { params: { userId: string } },
) {
  const { searchParams } = new URL(request.url);

  if (!userId) {
    res.status(400).json({ status: 400, body: "Missing userId" });
    return;
  }

  const reservations = await prisma.tripReservation.findMany({
    where: {
      userId: userId,
    },
    include: {
      trip: true,
    },
  });

  res.status(200).json(reservations);
}
