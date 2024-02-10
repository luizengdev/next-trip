import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params: { userId } }: { params: { userId: string } },
) {
  if (!userId) {
    return {
      status: 400,
      body: {
        message: "Missing userId",
      },
    };
  }

  const reservations = await prisma.tripReservation.findMany({
    where: {
      userId: userId,
    },
    include: {
      trip: true,
    },
  });

  return new Response(JSON.stringify(reservations), { status: 200 });
}
