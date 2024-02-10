import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params: { userId } }: { params: { userId: string } },
) {
  const { searchParams } = new URL(request.url);

  if (!userId) {
    return (
      JSON.stringify({
        body: {
          message: "Missing userId",
        },
      }),
      { status: 400 }
    );
  }

  const reservations = await prisma.tripReservation.findMany({
    where: {
      userId: userId,
    },
    include: {
      trip: true,
    },
  });

  console.log({ reservations });

  return new Response(JSON.stringify(reservations), { status: 200 });
}
