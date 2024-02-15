import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { NextApiResponse, NextApiRequest } from "next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function handle(req: NextApiRequest, res: NextApiResponse) {
  const tripId = req.query.tripId as string;
  const userSession = await getServerSession(authOptions);

  if (!userSession || !userSession.user || !(userSession.user as any).id) {
    res
      .status(401)
      .json({ message: "Você precisa estar logado para fazer isso." });
    return;
  }

  if (req.method === "POST") {
    const favorito = await prisma.favorito.create({
      data: {
        userId: (userSession.user as any).id,
        tripId: tripId,
      },
    });
    res.json(favorito);
  } else if (req.method === "DELETE") {
    const favorito = await prisma.favorito.delete({
      where: {
        userId_tripId: {
          userId: (userSession.user as any).id,
          tripId: tripId,
        },
      },
    });
    res.json(favorito);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
