import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const trip = await prisma.trip.findUnique({
    where: {
      id: req.tripId,
    },
  });

  if (!trip) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "TRIP_NOT_FOUND",
        },
      }),
    );
  }

  await prisma.tripReservation.create({
    data: {
      startDate: new Date(req.startDate),
      endDate: new Date(req.endDate),
      userId: req.userId,
      tripId: req.tripId,
      totalPaid: req.totalPaid,
      guests: req.guests,
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    { status: 201 },
  );
}
