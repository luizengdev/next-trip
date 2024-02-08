import { prisma } from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params: { reservationId } }: { params: { reservationId: string } }
) {
  if (!reservationId) {
    return new Response(
      JSON.stringify({
        status: 400,
        body: {
          message: "Missing reservationId"
        }
      })
    );
  }

  const reservation = await prisma.tripReservation.delete({
    where: {
      id: reservationId
    }
  });

  return new Response(JSON.stringify(reservation), { status: 200 });
}
